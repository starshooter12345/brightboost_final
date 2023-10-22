import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/images/secondphoto.jpg';

function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerStudent = async (studentData) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      // Send a POST request to the backend
      const res = await axios.post('http://localhost:5000/api/auth/register', studentData, config);
      console.log('Registration Response:', res.data);  // Log API response
    } catch (err) {
      console.error('Registration Error:', err.response.data);  // Log any errors
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Student Registered:', formData);
    // Call the registerStudent function and wait for it to complete
    await registerStudent({...formData, isTutor: false});
    // After registration, redirect the user to the login page
    history.push('/login');
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  // This will ensure the image covers the entire container
    backgroundRepeat: 'no-repeat',
    height: '100vh'  // This will make sure it covers the full viewport height
  };

  return (
    <div style={containerStyle}>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentRegistration;
