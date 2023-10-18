import React, { useState } from 'react';
import axios from 'axios';

function SessionDetails() {
    const [subject, setSubject] = useState('');
    const [session, setSession] = useState('');
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState('');

    const fetchQuestions = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/questions', {
                params: {
                    subject: subject,
                    session: session
                }
            });

            if (response.data.length > 0) {
                setQuestions(response.data);
                setError('');
            } else {
                setError('Question not found');
            }
        } catch (err) {
            console.error('Error fetching the questions:', err);
            setError('Error fetching the questions');
        }
    };

    return (
        <div>
            <h2>Session Details</h2>

            <label>
                Select Subject:
                <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
                    <option value="" disabled>Select Subject</option>
                    <option value="Maths">Maths</option>
                    <option value="Science">Science</option>
                    <option value="Literature">Literature</option>
                    <option value="Programming">Programming</option>
                    <option value="Media">Media</option>
                </select>
            </label>
          <br/>
            <label>
                Select Session:
                <select value={session} onChange={(e) => setSession(e.target.value)} required>
                    <option value="" disabled>Select Session</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                </select>
            </label>
            <br/>
            <button onClick={fetchQuestions}>Fetch Question</button>

            {questions.length > 0 && (
                <div>
                    <h3>Questions:</h3>
                    <ul>
                        {questions.map(q => (
                            <li key={q._id}>{q.question}</li>
                        ))}
                    </ul>
                </div>
            )}

            {error && <p>{error}</p>}
        </div>
    );
}

export default SessionDetails;