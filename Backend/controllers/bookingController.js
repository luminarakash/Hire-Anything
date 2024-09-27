const Booking = require('../models/Booking'); // Assuming you have a Booking model
const User = require('../models/User'); // Assuming you have a User model

// Create a new booking
exports.createBooking = async (req, res) => {
  const { user, service, date, time } = req.body;

  // Ensure all required fields are provided
  if (!user || !service || !date || !time) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  try {
    // Check if the user exists
    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Create a new booking
    const booking = new Booking({ user, service, date, time });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
};

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
};

// Handle a booking request (e.g., accept/reject)
exports.handleBookingRequest = async (req, res) => {
  const { bookingId } = req.params;
  const { status } = req.body;

  try {
    const booking = await Booking.findByIdAndUpdate(bookingId, { status }, { new: true });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found.' });
    }
    res.status(200).json({ message: 'Booking status updated', booking });
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking status', error: error.message });
  }
};
