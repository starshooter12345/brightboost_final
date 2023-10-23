


import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/images/secondphoto.jpg';
import './styles.css';


function TutorRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    tutorExpertise: [],
    tutorAvailability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false
    }
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name !== "tutorExpertise") {
      setFormData({
        ...formData,
        tutorAvailability: {
          ...formData.tutorAvailability,
          [name]: checked
        }
      });
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        tutorExpertise: checked
          ? [...formData.tutorExpertise, value]
          : formData.tutorExpertise.filter((subject) => subject !== value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerTutor(formData);
    history.push('/login');
  };

  const registerTutor = async (tutorData) => {
    try {
      const config = { headers: { 'Content-Type': 'application/json' }};
      await axios.post('http://localhost:5000/api/auth/register/tutor', tutorData, config);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  // This will ensure the image covers the entire container
    backgroundRepeat: 'no-repeat',
    height: '100vh'  // This will make sure it covers the full viewport height
  };

  return (
    <div style={containerStyle} className="container">
      <h2>Tutor Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:<input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
        <br />
        <label>Username:<input type="text" name="username" value={formData.username} onChange={handleChange} required /></label>
        <br />
        <label>Password:<input type="password" name="password" value={formData.password} onChange={handleChange} required /></label>
        <br />
        <label>Email:<input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
        <br />
        <label>Expertise:</label>
        <label><input type="checkbox" name="tutorExpertise" value="Maths" onChange={handleChange} /> Maths</label>
        <label><input type="checkbox" name="tutorExpertise" value="Science" onChange={handleChange} /> Science</label>
        <label><input type="checkbox" name="tutorExpertise" value="Media" onChange={handleChange} /> Media</label>
        <label><input type="checkbox" name="tutorExpertise" value="Literature" onChange={handleChange} /> Literature</label>
        <label><input type="checkbox" name="tutorExpertise" value="Programming" onChange={handleChange} /> Programming</label>
        <br />
        <label>Availability:</label>
        <label><input type="checkbox" name="monday" checked={formData.tutorAvailability.monday} onChange={handleChange} /> Monday 3:30-5:30pm</label>
        <label><input type="checkbox" name="tuesday" checked={formData.tutorAvailability.tuesday} onChange={handleChange} /> Tuesday 3:30-5:30pm</label>
        <label><input type="checkbox" name="wednesday" checked={formData.tutorAvailability.wednesday} onChange={handleChange} /> Wednesday 3:30-5:30pm</label>
        <label><input type="checkbox" name="thursday" checked={formData.tutorAvailability.thursday} onChange={handleChange} /> Thursday 3:30-5:30pm</label>
        <label><input type="checkbox" name="friday" checked={formData.tutorAvailability.friday} onChange={handleChange} /> Friday 3:30-5:30pm</label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default TutorRegistration;
