import React, { useState, useEffect } from 'react';

function ViewQuestions() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [details, setDetails] = useState('');

  // Fetch the questions when the component mounts
  useEffect(() => {
    // Replace this with the actual API call
    const fetchQuestions = async () => {
      const response = await fetch('api/questions');
      const data = await response.json();
      setQuestions(data);
    };
    fetchQuestions();
  }, []);

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question);
    setDetails('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission here, e.g., send the details to your API
  };

  return (
    <div>
      <ul>
        {questions.map((question) => (
          <li key={question.id} onClick={() => handleSelectQuestion(question)}>
            {question.subject}: {question.text}
          </li>
        ))}
      </ul>
      
      {selectedQuestion && (
        <form onSubmit={handleSubmit}>
          <label>
            Question Details:
            <textarea value={details} onChange={(e) => setDetails(e.target.value)} />
          </label>
          <button type="submit">Log Details</button>
        </form>
      )}
    </div>
  );
}

export default ViewQuestions;
