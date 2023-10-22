//Jamal_Front-end/src/components/pages/students/AskQuestion.jsx

import React, { useState } from 'react';
import axios from 'axios';

function AskQuestion() {
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [session, setSession] = useState(''); 
  const [tutors, setTutors ] = useState('');

  const submitQuestion = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/questions', { subject, question, session });
      alert('Question submitted successfully');
      setSubject('');
      setQuestion('');
      setSession(''); 
    } catch (error) {
      console.error('Error submitting the question:', error);
      alert('Error submitting the question');
    }
  };

  const fetchTutors = async ()=>{
    try{
      const response = await axios.get('http://localhost:5000/api/availability/availability', {
        params: {
          subject: subject,
          session: session
        }
    });
    setTutors(response.data);
  } catch (error) {
    console.error('Error fetching the tutors:', error);
    alert('Error fetching the tutors');
  }
  }

  return (
    <div>
       <button onClick={fetchTutors}>View tutor availability</button>
       {tutors.length > 0 && (
        <div>
          <h3>Available Tutors:</h3>
          <ul>
            {tutors.map(tutor => (
              <li key={tutor._id}>{tutor.name}</li>
            ))}
          </ul>
        </div>
      )}
      <h2>Ask a Question</h2>
      <form onSubmit={submitQuestion}>
        <label>
          Subject:
          <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
            <option value="" disabled>Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="Literature">Literature</option>
            <option value="Programming">Programming</option>
            <option value="Media">Media</option>
          </select>
        </label>
        <br />
        <label>
          Question:
          <textarea value={question} onChange={(e) => setQuestion(e.target.value)} required />
        </label>
        <br />
        <label>
          Select Session:
          <select value={session} onChange={(e) => setSession(e.target.value)} required>
            <option value="" disabled>Select Session</option>
            <option value="monday">Monday 3:30-5:30pm</option>
            <option value="tuesday">Tuesday 3:30-5:30pm</option>
            <option value="wednesday">Wednesday 3:30-5:30pm</option>
            <option value="thursday">Thursday 3:30-5:30pm</option>
            <option value="friday">Friday 3:30-5:30pm</option>
          </select>
        </label>
        
        
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

export default AskQuestion;
