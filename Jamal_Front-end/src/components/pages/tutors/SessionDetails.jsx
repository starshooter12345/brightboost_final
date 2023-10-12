import React, { useState } from 'react';
import axios from 'axios';

function SessionDetails() {
  const [attendance, setAttendance] = useState(0);

  const handleAttendanceChange = (e) => {
    setAttendance(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { 'Content-Type': 'application/json' }};
      const body = JSON.stringify({ tutorId: '6527a22014d0e9668495f8e7', attendance });
      await axios.post('http://localhost:5000/api/sessions', body, config);
      alert('Session saved successfully!');
    } catch (err) {
      console.error(err.response.data);
      alert('Error saving session!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Attendance:
        <input type="number" value={attendance} onChange={handleAttendanceChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SessionDetails;