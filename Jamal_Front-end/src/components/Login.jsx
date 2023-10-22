

import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

//new line
import backgroundImage from '../assets/images/secondphoto.jpg';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const [error, setError] = useState('');  // New state to manage error message

  const history = useHistory();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Reset error message on new submit

    // Send login request to server
    try {
        const config = { headers: { 'Content-Type': 'application/json' }};
        const body = JSON.stringify({ email: username, password, role });
        const response = await axios.post('http://localhost:5000/api/auth/login', body, config);
        
        // Handle successful login here (e.g., save token, redirect user, etc.)
        console.log('Login successful, received token:', response.data.token);
        
        // Redirecting based on role
        if(role === 'Tutor') {
            history.push('/tutors/sidenav'); 
        } else if(role === 'Student') {
            history.push('/students/sidenav'); 
        } else if(role === 'Admin' && username === 'admin@gmail.com' && password === 'admin123') {
            history.push('/AdminDashboard/admin-dashboard');
        }
    } catch (err) {
        console.log(err.response.data)
        console.error(err.response.data);
        setError('Invalid Credentials');
    }
};

//new line
const containerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',  // This will ensure the image covers the entire container
  backgroundRepeat: 'no-repeat',
  height: '100vh'  // This will make sure it covers the full viewport height
};

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
              <option value="Admin">Admin</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Email:
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </label>
        </div>
        
        {/* Error Message Display */}
        {error && (
          <div style={{color: 'red', marginBottom: '10px'}}>
            {error}
          </div>
        )}

        <div>
          <button type="submit">Login</button>
        </div>
      </form>

      <div>
        <p>Don't have an account?</p>
        <Link to="/student-registration">Register as Student</Link>
        <span> | </span>
        <Link to="/tutor-registration">Register as Tutor</Link>
      </div>
    </div>
  );
}

export default Login;