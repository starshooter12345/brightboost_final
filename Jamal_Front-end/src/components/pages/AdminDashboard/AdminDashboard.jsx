<<<<<<< HEAD
// AdminDashboard.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [session, setSession] = useState('');
//   const [questionCount, setQuestionCount] = useState(0);
//   const [tutorCount, setTutorCount] = useState(0);
//   const [studentCount, setStudentCount] = useState(0);

//   const fetchQuestionCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/questions/session-count', {
//         params: { session }
//       });
//       setQuestionCount(response.data.count);
//     } catch (err) {
//       console.error('Error fetching question count:', err);
//     }
//   };

//   const fetchTutorCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/tutors/session-count', {
//         params: { session }
//       });
//       setTutorCount(response.data.count);
//     } catch (err) {
//       console.error('Error fetching tutor count:', err);
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>

//       <label>
//         Select Session:
//         <select value={session} onChange={(e) => setSession(e.target.value)}>
//           <option value="" disabled>Select Session</option>
//           <option value="monday">Monday</option>
//           <option value="tuesday">Tuesday</option>
//           <option value="wednesday">Wednesday</option>
//           <option value="thursday">Thursday</option>
//           <option value="friday">Friday</option>
//         </select>
//       </label>

//       {session && (
//         <div>
//           <button onClick={fetchTutorCount}>Show number of tutors for the session</button>
//           <button onClick={fetchQuestionCount}>Show number of questions for the session</button>
//           <button onClick={() => setStudentCount(questionCount)}>Show the number of students attending the session</button>


//           <div>
//             <p>Tutors for this session: {tutorCount}</p>
//             <p>Questions for this session: {questionCount}</p>
//             <p>Students attending this session: {studentCount}</p> {/* As per the specification, it's the same as questionCount */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;

// AdminDashboard.jsx
=======
>>>>>>> df840de315187c6ea36a561985e354f2f73af943
import React, { useState } from 'react';
import axios from 'axios';

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

  return (
    <div>
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
<<<<<<< HEAD
                <th>Description</th>
                <th>Statistics</th>
=======
                <th>Attribute</th>
                <th>Count</th>
>>>>>>> df840de315187c6ea36a561985e354f2f73af943
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
