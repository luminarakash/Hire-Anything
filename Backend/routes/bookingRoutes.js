const express = require('express');
const router = express.Router();
const { createBooking, getBookings, handleBookingRequest } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, createBooking);
router.get('/', authMiddleware, getBookings);
router.put('/:bookingId', authMiddleware, handleBookingRequest);

module.exports = router;
