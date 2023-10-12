// Jamal_Front-end/src/components/pages/students/AskQuestion.jsx

import React, { useState } from 'react';
import axios from 'axios';

function AskQuestion() {
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');

  const submitQuestion = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/questions', { subject, question });
      alert('Question submitted successfully');
      setSubject('');
      setQuestion('');
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
            <option value="" disabled>Select subject</option>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AskQuestion;
