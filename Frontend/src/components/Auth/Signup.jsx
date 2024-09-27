import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [currentField, setCurrentField] = useState('firstName');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isEmailUnique, setIsEmailUnique] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setError(''); // Clear error when user starts typing
  };

  const validateCurrentField = async () => {
    if (!form[currentField].trim()) {
      setError(`${currentField.replace(/([A-Z])/g, ' $1').trim()} is required`);
      return false;
    }

    if (currentField === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        setError('Please enter a valid email address');
        return false;
      }

      try {
        const response = await axios.post('https://hireanything.com/check-email', { email: form.email });
        if (!response.data.isUnique) {
          setError('Email is already registered');
          return false;
        }
      } catch (err) {
        console.error('Error checking email uniqueness:', err);
        setError('An error occurred while checking the email');
        return false;
      }
    }

    return true;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentField();
    if (isValid) {
      switch (currentField) {
        case 'firstName':
          setCurrentField('lastName');
          break;
        case 'lastName':
          setCurrentField('email');
          break;
        case 'email':
          setCurrentField('password');
          break;
        case 'password':
          handleSubmit();
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost/hireanything', form);
      console.log('User created:', response.data);
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('There was an error!', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(`Server responded with status ${error.response.status}: ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received from the server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <Container className="mt-5">
      <Form>
        <h3>Sign Up</h3>

        {showSuccess && (
          <Alert variant="success">
            Registered successfully! Redirecting to the home page...
          </Alert>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        {currentField === 'firstName' && (
          <Form.Group className="mb-3">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
            />
          </Form.Group>
        )}
        {currentField === 'lastName' && (
          <Form.Group className="mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
            />
          </Form.Group>
        )}
        {currentField === 'email' && (
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>
        )}
        {currentField === 'password' && (
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>
        )}
        <Button variant="primary" onClick={handleNext}>
          {currentField === 'password' ? 'Sign Up' : 'Next'}
        </Button>
        <p className="mt-3">
          Already registered? <Link to="/login" className="primary-btn">Sign in</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Signup;
