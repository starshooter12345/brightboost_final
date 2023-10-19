import React, { useState } from 'react';
import axios from 'axios';

function SessionDetails() {
    const [subject, setSubject] = useState('');
    const [session, setSession] = useState('');
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState('');
    const [answeredCount, setAnsweredCount] = useState(0);
    const [sessionCount, setSessionCount] = useState(0);

    const fetchSessionCount = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/questions/session-count', {
                params: {
                    session: session
                }
            });
            setSessionCount(response.data.count);
        } catch (err) {
            console.error('Error fetching session student count:', err);
        }
    };

    const fetchAnsweredCount = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/questions/answered-count', {
                params: {
                    subject: subject,
                    session: session
                }
            });
            setAnsweredCount(response.data.count);
        } catch (err) {
            console.error('Error fetching answered questions count:', err);
        }
    };

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

    const markAsAnswered = async (questionId) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/questions/${questionId}/answer`);

            const updatedQuestions = questions.map(q => 
                q._id === questionId ? response.data : q
            );
            setQuestions(updatedQuestions);
        } catch (err) {
            console.error('Error marking the question as answered:', err);
            setError('Error marking the question as answered');
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
                            <li key={q._id}>
                                {q.question}
                                {!q.isAnswered && (
                                    <button onClick={() => markAsAnswered(q._id)}>Answer Question</button>
                                    
                                )}
                                
                            </li>
                            
                        ))}
                        <button onClick={fetchAnsweredCount}>View Answered Question Count</button>
                                <p>Answered Questions Count: {answeredCount}</p>

                               
                    </ul>
                    <button onClick={fetchSessionCount}>View Student count for session</button> {/* New Button */}
            
            <p>Student count for this session: {sessionCount}</p> 
                </div>
            )}

            {error && <p>{error}</p>}
        </div>
    );
}

export default SessionDetails;