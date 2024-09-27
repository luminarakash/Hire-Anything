const express = require('express');
const Partner = require('../models/partnerModel'); // Model import karo
const router = express.Router();

// Partner Registration
router.post('/register', async (req, res) => {
  const { email, password, firstName, lastName, contactNumber, companyName, country, address, listingTitle, photos, description, seats, vehicleReg, vehicleModel, bookingFee, mileage, category } = req.body;

  try {
    // Check if partner already exists
    let existingPartner = await Partner.findOne({ email });
    if (existingPartner) {
      return res.status(400).json({ message: 'Partner already exists' });
    }

    // Create new partner
    const partner = new Partner({
      email,
      password,
      firstName,
      lastName,
      contactNumber,
      companyName,
      country,
      address,
      listingTitle,
      photos,
      description,
      seats,
      vehicleReg,
      vehicleModel,
      bookingFee,
      mileage,
      category
    });

    // Save the new partner in the database
    await partner.save();

    res.status(201).json({ message: 'Partner registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
