const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const multer = require('multer');

const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otp');
const partnerRoutes = require('./routes/partnerRoutes');
require('dotenv').config();


// Define a simple model for storing form data
const FormModel = mongoose.model('Form', new mongoose.Schema({
  input: { type: String, required: true }
}));



const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Multer configuration for file uploads
const upload = multer({ dest: 'uploads/' });

// Nodemailer configuration for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use an app-specific password
  }
});

// Nodemailer configuration for Hostinger SMTP


const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};
const otpStore = {};
var otpExpiry = {};
app.post('/api/send-otp', async (req, res) => {
  const { email } = req.body;

  try {
    const otp = generateOTP();
    otpExpiry = Date.now() + 10 * 60 * 1000;

    otpStore[email] = { otp, otpExpiry };

    // Save OTP and expiry to partner's document
    

    // Send OTP email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Error sending OTP', error: error.message });
  }
});




// Function to send confirmation email
const sendEmail = (formData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: formData.email,
    subject: 'Form Submission Successful',
    text: `Hello,\n\nThank you for your submission. We have received the following input:\n\n${formData.input}\n\nBest regards,\nYour Team`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Verify OTP
app.post('/api/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Check if an OTP exists for the email
    console.log (otpStore[email]);
    console.log (otpStore);
    console.log (otp);
    if (!otpStore[email]) {
      return res.status(404).json({ message: 'No OTP found for this email' });
    }

    const { otp: storedOtp, otpExpiry } = otpStore[email];

    // Check if OTP matches and is not expired
    if (storedOtp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
    if (Date.now() > otpExpiry) {
      return res.status(400).json({ message: 'OTP has expired' });
    }

    // OTP is valid, clear OTP fields for this email
    // delete otpStore[email];
    
    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ message: 'Error verifying OTP', error: error.message });
  }
});

// Partner Sign-Up Route
app.post('/partner-signup', async (req, res) => {
  try {
    const partnerData = new Partner(req.body);
    await partnerData.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.email, // Partner's email from the form
      subject: 'Partner Sign-Up Successful',
      text: `Hi ${req.body.firstName},\n\nYour partner sign-up on HireAnything has been successfully completed.\n\nThank you for joining us!`,
    };

    await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending confirmation email:', error);
          return reject(error); // Reject the promise on error
        }
        console.log('Confirmation email sent:', info.response);
        resolve(info); // Resolve the promise on success
      });
    });

    res.status(201).json({ message: 'Partner signed up successfully!' });
  } catch (error) {
    console.error('Error signing up partner:', error);
    res.status(500).json({ message: 'Error signing up partner', error: error.message });
  }
});

// Endpoint to handle single-field form submissions
app.post('/api/send-email', async (req, res) => {
  try {
    const { input, email } = req.body;
    const formData = new FormModel({ input });
    await formData.save();
    
    // Send confirmation email
    sendEmail({ input, email });

    res.status(201).send('Form submission successful');
  } catch (error) {
    console.error('Error processing form:', error);
    res.status(500).send('Error processing form');
  }
});

// MongoDB connection
const port = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.i4dm9fp.mongodb.net/HireAnything`;

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});

// Home route to check server status
app.get('/', (req, res) => {
  res.send('<h1>Backend is Running for HireAnything</h1>');
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/bookings', bookingRoutes);
