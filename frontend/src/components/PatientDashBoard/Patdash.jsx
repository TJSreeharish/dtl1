import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './patdash.css';
import backgroundVideo from "./background.mp4";
import axios from 'axios'; // Ensure axios is imported

const PatientDashboard = () => {
    const navigate = useNavigate();
    const backend_url = import.meta.env.VITE_FLASK_BACKEND_URL;
    const handleMedicalRecords = async () => {
        try {
            const email = localStorage.getItem('email');
            console.log('User email from localStorage:', email);
    
            if (email) {
                const response = await fetch(`${backend_url}/receive-user-id`, {
                    method: 'POST',
                    credentials: 'include',  // Ensures cookies are sent
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userId: email })
                });
    
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    
                    if (data.redirect) {
                        window.location.href = `${backend_url}${data.redirect}`;
                    }
                } else {
                    console.error('Failed to retrieve redirect URL');
                }
            } else {
                console.error('No email found in localStorage');
            }
        } catch (error) {
            console.error('Error accessing medical records:', error);
        }
    };    
    
    return (
        <div>
            <video autoPlay muted loop id="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="dashboard-content">
                <h1>Welcome to CliniNSync Patient Dashboard!</h1>
                <div className="button-container">
                    <button onClick={handleMedicalRecords} className="button">
                        My Medical Records
                    </button>
                    <Link to="/appointments" className="button">
                        Appointments
                    </Link>
                    <Link to="/patients" className="button">
                        My entries
                    </Link>
                    <Link to="/doctors" className="button">
                        Find Doctors
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

export default PatientDashboard;
