

import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

import backgroundImage from '../assets/images/secondphoto.jpg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
        const config = { headers: { 'Content-Type': 'application/json' }};
        const body = JSON.stringify({ email: username, password, role });
        const response = await axios.post('http://localhost:5000/api/auth/login', body, config);
        
        console.log('Login successful, received token:', response.data.token);
        
        if(role === 'Tutor') {
            history.push('/tutors/sidenav'); 
        } else if(role === 'Student') {
            history.push('/students/sidenav'); 
        } else if(role === 'Admin' && username === 'admin@gmail.com' && password === 'admin123') {
            history.push('/AdminDashboard/admin-dashboard');
        }
    } catch (err) {
        console.error(err.response.data);
        setError('Invalid Credentials');
    }
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <div className="login-container">
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
          <p>Register for an account</p>
          <Link to="/student-registration">Student</Link>
          <span> | </span>
          <Link to="/tutor-registration">Tutor</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
