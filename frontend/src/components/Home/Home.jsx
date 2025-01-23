import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from './background.mp4';
import './Home.css'; // Import the CSS file

const Dashboard = () => {
    const navigationButtons = [
        { name: 'Patients', link: '/patients' },
        { name: 'Doctors/Practitioners', link: '/doctors' },
        { name: 'User Management', link: '/medicaldocuments' },
        { name: 'Appointments', link: '/appointments' },
    ];

    return (
        <div>
            {/* Background Video */}
            <video autoPlay muted loop id="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dashboard Content */}
            <div className="dashboard-content">
                <h1>Welcome to CliniNSync Admin Dashboard!</h1>
                <div className="button-container">
                    {navigationButtons.map((button, index) => (
                        <Link key={index} to={button.link} className = "button">
                            {button.name}
                        </Link>
                    ))}
                </div>
                <Link to="/login" className="logout-button">
                    Logout
                </Link>
                <footer>©️CliniNSync</footer>
            </div>
        </div>
    );
};

export default Dashboard;
