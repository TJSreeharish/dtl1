import React from 'react';
import { Link } from 'react-router-dom';
// import '../Home/Home.css'; // Ensure this file contains any additional styles specific to the Home page.
import './docdash.css'; // Import the CSS file with the styles.
import backgroundVideo from "./background.mp4"
const DoctorDashboard = () => {
    return (
        <div>
            <video autoPlay muted loop id="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        <div className="dashboard-content">
            <h1>Welcome to CliniNSync Doctor Dashboard!</h1>
            <div className="button-container">
                {/* <Link to="/patients" className="button">
                    Patients
                </Link> */}
                <Link to="/patientrecord" className="button">
                    Patient Records
                </Link>
                <Link to="/appointments" className="button">
                    Appointments
                </Link>
            </div>
            <Link to="/login" className="logout-button">
                Logout
            </Link>
            <footer>© CliniNSync</footer>
        </div>
        </div>
    );
};

export default DoctorDashboard;
