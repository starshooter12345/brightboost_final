import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from '../../../assets/images/secondphoto.jpg';

function ViewQuestions() {
  const [expertise, setExpertise] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    if (!expertise) return; // Do not fetch if no expertise is selected

    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/questions?subject=${expertise}`);
      setQuestions(res.data);
    } catch (error) {
      console.error('Error fetching the questions:', error);
      alert('Error fetching the questions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [expertise]); // Re-fetch questions when expertise changes


  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',  // This will ensure the image covers the entire container
    backgroundRepeat: 'no-repeat',
    height: '100vh'  // This will make sure it covers the full viewport height
  };

  
  return (
    <div style={containerStyle}>
      <h2>View Questions</h2>
      <label>
        Your Expertise:
        <select value={expertise} onChange={(e) => setExpertise(e.target.value)} required>
          <option value="" disabled>Select expertise</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
          <option value="Literature">Literature</option>
          <option value="Programming">Programming</option>
          <option value="Media">Media</option>
        </select>
      </label>
      <br />
      {loading ? (
        <p>Loading questions...</p>
      ) : (
        <ul>
          {questions.map((q) => (
            <li key={q._id}>{q.question}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewQuestions;
