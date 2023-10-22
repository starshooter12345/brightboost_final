// HomePage.jsx

import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="header">
                <h1>Welcome to Bright Boost</h1>
                <p>After-school tutoring for high school students</p>
            </header>

            <section className="description">
                <h2>About Us</h2>
                <p>Bright Boost is an after-school program aimed at providing high-quality tutoring for high school students. Students from local high schools can enroll in our program for a small fee, which can be paid yearly or per term.</p>
            </section>

            <section className="details">
                <h2>Program Details</h2>
                <ul>
                    <li>Sessions run every weekday from <strong>3:30pm to 5:30pm</strong></li>
                    <li>Staffed by one or more tutors depending on the day</li>
                    <li>Each tutor specializes in one or more subject areas</li>
                    <li>Sessions are run on a drop-in, first-come-first-served basis</li>
                    <li>Students can ask questions or use the space to work in</li>
                </ul>
            </section>

            <section className="current-system">
                <h2>How It Works</h2>
                <p>At the start of each session, tutors write their names and areas of expertise on a whiteboard at the front of the room. If students have questions, they simply raise their hand to get assistance.</p>
            </section>

            <footer>
                <p>Join us and boost your academic performance with Bright Boost!</p>
            </footer>
        </div>
    );
}

export default HomePage;
