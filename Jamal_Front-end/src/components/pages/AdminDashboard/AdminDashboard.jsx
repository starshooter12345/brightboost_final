
import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../../assets/images/secondphoto.jpg';
const AdminDashboard = () => {
  const [session, setSession] = useState('');
  const [questionCount, setQuestionCount] = useState(0);
  const [tutorCount, setTutorCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  const fetchQuestionCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/questions/session-count', {
        params: { session }
      });
      setQuestionCount(response.data.count);
    } catch (err) {
      console.error('Error fetching question count:', err);
    }
  };

  const fetchTutorCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tutors/session-count', {
        params: { session }
      });
      setTutorCount(response.data.count);
    } catch (err) {
      console.error('Error fetching tutor count:', err);
    }
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  // This will ensure the image covers the entire container
    backgroundRepeat: 'no-repeat',
    height: '100vh'  // This will make sure it covers the full viewport height
  };
  
  return (
    <div style={containerStyle}>
      <h2>Admin Dashboard</h2>

      <label>
        Select Session:
        <select value={session} onChange={(e) => setSession(e.target.value)}>
          <option value="" disabled>Select Session</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
        </select>
      </label>

      {session && (
        <div>
          <button onClick={fetchTutorCount}>Show number of tutors for the session</button>
          <button onClick={fetchQuestionCount}>Show number of questions for the session</button>
          <button onClick={() => setStudentCount(questionCount)}>Show the number of students attending the session</button>

          <table border="1" style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>

                <th>Description</th>
                <th>Statistics</th>

                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tutors for this session</td>
                <td>{tutorCount}</td>
              </tr>
              <tr>
                <td>Questions for this session</td>
                <td>{questionCount}</td>
              </tr>
              <tr>
                <td>Students attending this session</td>
                <td>{studentCount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
