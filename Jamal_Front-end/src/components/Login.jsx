// import React, { useState } from 'react';
// import { useHistory, Link } from 'react-router-dom';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('Student');

//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Dummy login validation logic (for demonstration purposes)
//     // In real-world applications, you'd validate the credentials against a backend.

//     if (role === 'Tutor') {
//       history.push('/tutors/sidenav'); 
//     } else if (role === 'Student') {
//       history.push('/students/sidenav'); 
//     } else if (role === 'Admin' && username === 'admin' && password === 'admin123') {
//       history.push('/admin-dashboard'); 
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Role:
//             <select value={role} onChange={(e) => setRole(e.target.value)}>
//               <option value="Student">Student</option>
//               <option value="Tutor">Tutor</option>
//               <option value="Admin">Admin</option>
//             </select>
//           </label>
//         </div>
//         <div>
//           <label>
//             Username:
//             <input 
//               type="text" 
//               value={username} 
//               onChange={(e) => setUsername(e.target.value)} 
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password:
//             <input 
//               type="password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//             />
//           </label>
//         </div>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </form>

//       <div>
//         <p>Don't have an account?</p>
//         <Link to="/student-registration">Register as Student</Link>
//         <span> | </span>
//         <Link to="/tutor-registration">Register as Tutor</Link>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const [error, setError] = useState('');  // New state to manage error message

  const history = useHistory();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setError('');  // Reset error message on new submit

  //   // Dummy login validation logic
  //   if (role === 'Tutor') {
  //     history.push('/tutors/sidenav'); 
  //   } else if (role === 'Student') {
  //     history.push('/students/sidenav'); 
  //   } else if (role === 'Admin') {
  //     // Hardcoded admin credentials check
  //     if(username === 'admin' && password === 'admin123') {
  //       history.push('/admin-dashboard');
  //     } else {
  //       setError('Invalid Admin Credentials');  // Set error message if credentials are incorrect
  //     }
  //   }
  // };

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
        } else if(role === 'Admin' && username === 'admin' && password === 'admin123') {
            history.push('/admin-dashboard');
        }
    } catch (err) {
        console.error(err.response.data);
        setError('Invalid Credentials');
    }
};

  return (
    <div>
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
            Username:
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