import React, { useState } from 'react';

function SessionDetails() {
  const [attendance, setAttendance] = useState(0);
  const [questionsCount, setQuestionsCount] = useState({});
  
  const handleAttendanceChange = (e) => {
    setAttendance(e.target.value);
  };

  const handleQuestionsChange = (subject, count) => {
    setQuestionsCount(prevState => ({
      ...prevState,
      [subject]: count
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission here, e.g., send the data to your API
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Attendance:
        <input type="number" value={attendance} onChange={handleAttendanceChange} />
      </label>
      
      {/* You would dynamically generate these based on the available subjects */}
      <label>
        Math Questions:
        <input type="number" value={questionsCount.math || 0} onChange={(e) => handleQuestionsChange('math', e.target.value)} />
      </label>
      
      <label>
        Science Questions:
        <input type="number" value={questionsCount.science || 0} onChange={(e) => handleQuestionsChange('science', e.target.value)} />
      </label>
      
      {/* ... other subjects ... */}
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default SessionDetails;
