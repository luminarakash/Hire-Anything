import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Us</h2>
      <p>* Indicates a required field</p>
      
      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter a valid email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Phone *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter a valid Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="enquiryType">Enquiry Type *</label>
        <select
          className="u-input u-input-rectangle u-palette-1-light-3"
          name="enquiryType"
          id="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          required
        >
          <option value="">- Select -</option>
          <option value="New Booking Enquiry">New Booking Enquiry</option>
          <option value="Existing Booking Enquiry">Existing Booking Enquiry</option>
          <option value="Partner Enquiry">Partner Enquiry</option>
          <option value="PR / Media Enquiry">PR / Media Enquiry</option>
          <option value="SEO / Marketing Enquiry">SEO / Marketing Enquiry</option>
          <option value="Something Else">Something Else</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
