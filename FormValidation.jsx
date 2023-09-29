import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
   
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {
      username: '',
      email: '',
      password: '',
      
    };

    let isValid = true;

    if (!formData.username) {
      newErrors.username = '*Username is required.';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '*Invalid email format.';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = '*Password is required.';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = '*Password must be at least 6 characters long.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submission
      alert('Form submitted successfully!');
    } else {
      // Form is invalid, display errors
      console.log('Form has errors. Please fix them.');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text" name="username" value={formData.username} onChange={handleChange} /><br />
          <span className="error">{errors.username}</span><br />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text" name="email" value={formData.email} onChange={handleChange} /><br />
          <span className="error">{errors.email}</span><br />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} /><br />
          <span className="error">{errors.password}</span><br />
        </div>
        <div>
         
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FormValidation;
