import React, { useState, useEffect } from 'react';

function TutorAvailability() {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState('');

  // This effect will run when the component mounts and fetch the tutors' data from your API
  useEffect(() => {
    // Replace this with the actual API call
    const fetchTutors = async () => {
      const response = await fetch('api/tutors');
      const data = await response.json();
      setTutors(data);
    };
    fetchTutors();
  }, []);

  return (
    <div>
      <label>
        Search by Expertise:
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </label>
      <table>
        <thead>
          <tr>
            <th>Tutor</th>
            <th>Expertise</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {tutors
            .filter((tutor) => tutor.expertise.includes(search))
            .map((tutor) => (
              <tr key={tutor.id}>
                <td>{tutor.name}</td>
                <td>{tutor.expertise}</td>
                <td>{tutor.availability}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TutorAvailability;
