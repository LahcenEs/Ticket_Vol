import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
   
    message: '' // Added message field
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '' // Added message field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear errors when the user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };
  const validateEmail = (email) => {
    // Regular expression for validating email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for validating phone number format
    const regex = /^(06|05|07)\d{8}$/;
    return regex.test(phoneNumber);
  };
  const handleSubmit = async (e) =>  { 
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
    }
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
    }
    if (formData.phoneNumber.trim() === '') {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format or length (should start with 06, 05, or 07 and be 10 digits)';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
   
    // if (formData.message.trim() === '') {
    //   newErrors.message = 'Message is required'; // Added validation for message field
    // }

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, set them and prevent form submission
      setErrors(newErrors);
    } else {
      // If no errors, handle form submission
      console.log(formData);
      // Reset form fields after submission
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      
      });
      setErrors({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
       
        
      });
    }
    setFormData({
      ...formData,
      message: "hello world"
    });
    const res = await fetch('http://localhost:8000/contact',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
  };
  // Render the form
     
  return (
    <div className="container mt-5 contact">
      <h2 className="text-center mb-4">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className={`form-control ${errors.firstName && 'is-invalid'}`} id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className={`form-control ${errors.lastName && 'is-invalid'}`} id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className={`form-control ${errors.phonE && 'is-invalid'}`} id="phoneNumber" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phoneNumber && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className={`form-control ${errors.email && 'is-invalid'}`} id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <button type="submit" className="btn btn-success">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;