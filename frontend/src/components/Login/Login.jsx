import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
import backgroundVideo from "./dback.mp4";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const navigate = useNavigate();
    const backend_url = import.meta.env.VITE_JS_BACKEND_URL;
    ;

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowAnimation(true);

        const payload = { role, email, password };
        axios
            .post(`${backend_url}/login`, payload)
            .then(async (result) => {
                if (result.data === 'Success') {
                    localStorage.setItem('role', role);
                    localStorage.setItem('email', email);
                    if (role === 'Admin') navigate('/home');
                    else if (role === 'Patient') navigate('/patdash');
                    else if (role === 'Doctor') navigate('/docdash');
                } else {
                    setLoginError(true);
                    setShowAnimation(false);
                }
            })
            .catch((err) => {
                console.error('Login error:', err);
                setLoginError(true);
                setShowAnimation(false);
            });
    };

    useEffect(() => {
        if (showAnimation) {
            setTimeout(() => {
                setShowAnimation(false);
            }, 1000);
        }
    }, [showAnimation]);

    return (
        <div className="login-background">
            <video autoPlay muted loop id="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="login-container">
                <h2 className="login-title">Login to CliniNSync</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="role" className="form-label"><strong>Role</strong></label>
                        <select
                            className="form-select"
                            id="role"
                            value={role}
                            onChange={(event) => setRole(event.target.value)}
                            required
                        >
                            <option value="">Select your role</option>
                            <option value="Admin">Admin</option>
                            <option value="Patient">Patient</option>
                            <option value="Doctor">Doctor</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <Link to="/register" className="btn btn-secondary w-100 mt-3">Register</Link>
                {loginError && (
                    <div className="alert alert-danger mt-3" role="alert">
                        Incorrect Credentials! Please try again.
                    </div>
                )}
                {showAnimation && (
                    <div className="text-center mt-3">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                <p className="mt-3 text-muted">© CliniNSync</p>
            </div>
        </div>
    );
};

export default Login;
