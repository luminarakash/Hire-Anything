import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PartnerSignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    otp: '', // Add field for OTP
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    companyName: '',
    country: '',
    address: '',
    listingTitle: '',
    photos: [],
    description: '',
    seats: '',
    vehicleReg: '',
    vehicleModel: '',
    specialReq: '',
    bookingFee: '',
    mileage: '',
    category: '' // Added field for category
  });
  const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent
  const [otpVerified, setOtpVerified] = useState(false); // Track if OTP is verified
  const [generatedOtp, setGeneratedOtp] = useState(null); // Store generated OTP
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Send OTP function (simulated OTP generation for now)
  // Send OTP function
const sendOtp = async () => {
 // Store the generated OTP

  try {
    // Send OTP to backend and email
    await axios.post('http://localhost:5001/api/send-otp', { email: formData.email});
    setOtpSent(true);
    setError('');
    console.log(`OTP sent to ${formData.email}`);
  } catch (error) {
    console.error('Error sending OTP:', error);
    setError('Failed to send OTP. Please try again.');
  }
};


  // Verify OTP function
  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/verify-otp', {
        email: formData.email,
        otp: formData.otp
      });

      if (response.status === 200 && response.data.message === 'OTP verified successfully') {
        setOtpVerified(true);
        setError('');
        setShowSuccess(true);
        console.log('OTP verified successfully');
        // navigate('/success'); // Navigate to another page after verification success
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Failed to verify OTP. Please try again.');
    }
  };


  // Validate form step
  const validateStep = () => {
    const currentErrors = {};

    switch (step) {
      case 1:
        if (!formData.email) currentErrors.email = 'Email is required';
        if (!otpVerified) currentErrors.otp = 'OTP verification is required';
        if (!formData.password || formData.password.length < 10) currentErrors.password = 'Password must be at least 10 characters';
        if (formData.password !== formData.confirmPassword) currentErrors.confirmPassword = 'Passwords must match';
        break;
      case 2:
        if (!formData.firstName) currentErrors.firstName = 'First name is required';
        if (!formData.lastName) currentErrors.lastName = 'Last name is required';
        if (!formData.contactNumber || !/^\d+$/.test(formData.contactNumber)) currentErrors.contactNumber = 'Contact number must be numeric and is required';
        break;
      case 3:
        if (!formData.category) currentErrors.category = 'Category is required';
        if (!formData.companyName) currentErrors.companyName = 'Company name is required';
        if (!formData.country) currentErrors.country = 'Country/Region is required';
        if (!formData.address) currentErrors.address = 'Address is required';
        if (!formData.listingTitle) currentErrors.listingTitle = 'Listing title is required';
        if (formData.photos.length === 0) currentErrors.photos = 'At least one photo is required';
        if (!formData.description) currentErrors.description = 'Description is required';
        if (!formData.seats) currentErrors.seats = 'Number of seats is required';
        if (!formData.vehicleReg) currentErrors.vehicleReg = 'Vehicle registration number is required';
        if (!formData.vehicleModel) currentErrors.vehicleModel = 'Vehicle make & model is required';
        if (!formData.bookingFee) currentErrors.bookingFee = 'Booking fee is required';
        if (!formData.mileage) currentErrors.mileage = 'Mileage included is required';
        break;
      default:
        break;
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateStep()) {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === 'photos') {
          formData.photos.forEach((file) => {
            data.append('photos', file);
          });
        } else {
          data.append(key, formData[key]);
        }
      });

      try {
        await axios.post('http://localhost:5000/partner-signup', data);
        setShowSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error) {
        console.error('There was an error!', error);
        setError('Kindly check all fields. Please try again.');
      }
    }
  };

  return (
    <Container>
      {showSuccess && <Alert variant="success">Registration successful! Redirecting...</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <h2>Create Your Partner Account</h2>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
            {!otpSent ? (
              <Button variant="primary" type="button" onClick={sendOtp}>
                Send OTP
              </Button>
            ) : (
              <>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                    isInvalid={!!errors.otp}
                  />
                  <Form.Control.Feedback type="invalid">{errors.otp}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="button" onClick={verifyOtp}>
                  Verify OTP
                </Button>
              </>
            )}

            {otpVerified && (
              <>
                <Form.Group>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    minLength={10}
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                </Form.Group>
              </>
            )}
            <Button variant="primary" type="button" onClick={nextStep} disabled={!otpVerified}>
              Next
            </Button>
          </div>
        )}

       

{step === 2 && (
          <div>
            <h2>Personal Details</h2>
            <Form.Group>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                isInvalid={!!errors.contactNumber}
              />
              <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="secondary" type="button" onClick={prevStep}>Previous</Button>
            <Button variant="primary" type="button" onClick={nextStep}>Next</Button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Listing Details</h2>
            <Form.Group>
              <Form.Control
                as="select"
                name="category"
                value={formData.category}
                onChange={handleChange}
                isInvalid={!!errors.category}
              >
                <option value="" disabled>Select a Category</option>
                <option value="Limousine Hire">Limousine Hire</option>
                <option value="Minibus Hire">Minibus Hire</option>
                <option value="Coach Hire">Coach Hire</option>
                <option value="Horse and Carriage Hire">Horse and Carriage Hire</option>
                <option value="Boat Hire">Boat Hire</option>
                <option value="Funeral Car Hire">Funeral Car Hire</option>
                <option value="Chauffeur Driven Prestige Car Hire">Chauffeur Driven Prestige Car Hire</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                isInvalid={!!errors.companyName}
              />
              <Form.Control.Feedback type="invalid">{errors.companyName}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="country"
                placeholder="Country/Region"
                value={formData.country}
                onChange={handleChange}
                isInvalid={!!errors.country}
              />
              <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="address"
                placeholder="Address (Street Name, Door Number, Postcode, City)"
                value={formData.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="listingTitle"
                placeholder="Listing Title"
                value={formData.listingTitle}
                onChange={handleChange}
                isInvalid={!!errors.listingTitle}
              />
              <Form.Control.Feedback type="invalid">{errors.listingTitle}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="file"
                name="photos"
                multiple
                onChange={handleFileChange}
                isInvalid={!!errors.photos}
              />
              <Form.Control.Feedback type="invalid">{errors.photos}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="number"
                name="seats"
                placeholder="Number of Seats"
                value={formData.seats}
                onChange={handleChange}
                isInvalid={!!errors.seats}
              />
              <Form.Control.Feedback type="invalid">{errors.seats}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="vehicleReg"
                placeholder="Vehicle Registration Number"
                value={formData.vehicleReg}
                onChange={handleChange}
                isInvalid={!!errors.vehicleReg}
              />
              <Form.Control.Feedback type="invalid">{errors.vehicleReg}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="vehicleModel"
                placeholder="Vehicle Make & Model"
                value={formData.vehicleModel}
                onChange={handleChange}
                isInvalid={!!errors.vehicleModel}
              />
              <Form.Control.Feedback type="invalid">{errors.vehicleModel}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="specialReq"
                placeholder="Special Requirements"
                value={formData.specialReq}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="bookingFee"
                placeholder="Booking Fee"
                value={formData.bookingFee}
                onChange={handleChange}
                isInvalid={!!errors.bookingFee}
              />
              <Form.Control.Feedback type="invalid">{errors.bookingFee}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="mileage"
                placeholder="Mileage Included"
                value={formData.mileage}
                onChange={handleChange}
                isInvalid={!!errors.mileage}
              />
              <Form.Control.Feedback type="invalid">{errors.mileage}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="secondary" type="button" onClick={prevStep}>Previous</Button>
            <Button variant="primary" type="submit">Submit</Button>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default PartnerSignUp;
