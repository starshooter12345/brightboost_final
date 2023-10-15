// Jamal_Front-end/src/components/pages/students/AskQuestion.jsx

import React, { useState } from 'react';
import axios from 'axios';

function AskQuestion() {
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [session, setSession] = useState(''); 

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

  return (
    <div>
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
            <option value="Monday 3:30-5:30pm">Monday 3:30-5:30pm</option>
            <option value="Tuesday 3:30-5:30pm">Tuesday 3:30-5:30pm</option>
            <option value="Wednesday 3:30-5:30pm">Wednesday 3:30-5:30pm</option>
            <option value="Thursday 3:30-5:30pm">Thursday 3:30-5:30pm</option>
            <option value="Friday 3:30-5:30pm">Friday 3:30-5:30pm</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AskQuestion;
