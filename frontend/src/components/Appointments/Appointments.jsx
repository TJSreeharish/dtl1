import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Appointments.css";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import backgroundVideo from "./dback.mp4";

const AppointmentBooking = () => {
  const patientemail = localStorage.getItem('email');
  const doctorName = localStorage.getItem('doctorName');
  const doctorEmail = localStorage.getItem('doctorEmail');
  const [formData, setFormData] = useState({
    patientName: '',
    appointmentDate: '',
    appointmentTime: '',
    age: '',
    gender: '',
    contactNumber: '',
    timings: '',
  });

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const backend_url = import.meta.env.VITE_JS_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backend_url}/appointments`);
        const allAppointments = response.data;
        console.log(allAppointments);
        
        // Filter appointments for logged-in doctor
        if (role === 'Doctor') {
          const filteredAppointments = allAppointments.filter(
            (appointment) => appointment.doctorEmail === localStorage.getItem('email')
          );
          console.log(filteredAppointments);
          
          setAppointments(filteredAppointments);
        } else {
          setAppointments(allAppointments);
        }
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to get the current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  };

  // Function to get the current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`; // Format: HH:MM
  };

  // Populate form fields with current date and time when component mounts
  useEffect(() => {
    setFormData({
      appointmentDate: getCurrentDate(),
      appointmentTime: getCurrentTime(),
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAppointmentBooking = async (e) => {
    e.preventDefault();
    const newAppointment = { ...formData, patientemail, doctorName, doctorEmail };
    console.log(newAppointment);
    
    try {
      await axios.post(`${backend_url}/appointments`, newAppointment, {
        headers: { 'Content-Type': 'application/json' },
      });
      const fetchData = async () => {
        try {
          const response = await axios.get(`${backend_url}/appointments`);
          const allAppointments = response.data;
          console.log(allAppointments);
          
          // Filter appointments for logged-in doctor
          if (role === 'Doctor') {
            const filteredAppointments = allAppointments.filter(
              (appointment) => appointment.doctorEmail === localStorage.getItem('email')
            );
            console.log(filteredAppointments);
            
            setAppointments(filteredAppointments);
          } else {
            setAppointments(allAppointments);
          }
          setLoading(false);
        } catch (error) {
          setError('Error fetching data');
          setLoading(false);
        }
      };

      fetchData();
      setFormData({
        patientName: '',
        appointmentDate: getCurrentDate(),
        appointmentTime: getCurrentTime(),
        age: '',
        gender: '',
        contactNumber: '',
        timings:'',
      });
      localStorage.removeItem('doctorEmail');
      localStorage.removeItem('doctorName');
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await axios.delete(`${backend_url}/appointments/${appointmentId}`);
      const fetchData = async () => {
        try {
          const response = await axios.get(`${backend_url}/appointments`);
          const allAppointments = response.data;
          console.log(allAppointments);
          
          // Filter appointments for logged-in doctor
          if (role === 'Doctor') {
            const filteredAppointments = allAppointments.filter(
              (appointment) => appointment.doctorEmail === localStorage.getItem('email')
            );
            console.log(filteredAppointments);
            
            setAppointments(filteredAppointments);
          } else {
            setAppointments(allAppointments);
          }
          setLoading(false);
        } catch (error) {
          setError('Error fetching data');
          setLoading(false);
        }
      };
      fetchData();
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleStatusChange = async (appointmentId, newStatus) => {
    try {
      await axios.put(`${backend_url}/appointments/${appointmentId}`, { status: newStatus });
      const fetchData = async () => {
        try {
          const response = await axios.get(`${backend_url}/appointments`);
          const allAppointments = response.data;
          console.log(allAppointments);
          
          // Filter appointments for logged-in doctor
          if (role === 'Doctor') {
            const filteredAppointments = allAppointments.filter(
              (appointment) => appointment.doctorEmail === localStorage.getItem('email')
            );
            console.log(filteredAppointments);
            
            setAppointments(filteredAppointments);
          } else {
            setAppointments(allAppointments);
          }
          setLoading(false);
        } catch (error) {
          setError('Error fetching data');
          setLoading(false);
        }
      };

      fetchData();
    } catch (error) {
      console.error('Error changing appointment status:', error);
    }
  };

  const handleDashboardClick = () => {
    if (role === 'Admin') {
      navigate('/home');
    } else if (role === 'Patient') {
      navigate('/patdash');
    } else if (role === 'Doctor') {
      navigate('/docdash');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled':
        return 'blue';
      case 'confirmed':
        return 'green';
      case 'canceled':
        return 'red';
      case 'completed':
        return 'gray';
      default:
        return 'black';
    }
  };

  const patientUpcomingAppointments = appointments.filter((appointment) => appointment.patientemail === patientemail);
  const upcomingAppointments = appointments;
  
  const userAppointments = role === 'Patient' ? patientUpcomingAppointments : upcomingAppointments;

  return (
    <div className='appoint-background'>
      <video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      <RouterLink to={role === 'Admin' ? '/home' : role === 'Patient' ? '/patdash' : '/docdash'}>
        <button
          style={{
            backgroundColor: "blue",
            color: '#ffffff',
            fontSize: "22px",
            padding: '10px 15px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            outline: 'none',
            transition: 'border-color 0.3s ease-out',
            marginTop: '80px',
            marginLeft: '30px',
          }}
          onClick={handleDashboardClick}
        >
          Dashboard
        </button>
      </RouterLink>

      {role !== 'Admin' && role !== 'Doctor' && (
        <>
          {!doctorName ? (
          <>
          <h1 style={{ textAlign: 'center', margin: '5px 0 0', color: "darkblue", fontSize: "42px" }}>New Appointment Details</h1>
            <div style={{ textAlign: 'center', color: 'red', fontSize: '24px', margin: '20px 0' }}>
              <p>Please select a doctor to book an appointment.</p>
            </div>
          </>) : (
            <div className="form-container">
            <form onSubmit={handleAppointmentBooking}>
              <div className="form-row">
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  placeholder="Patient Name"
                />
                <input
                  type="text"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  placeholder="Appointment Date"
                  readOnly
                />
                  <select
  name="timings" // Update 'timing' in formData
  value={formData.timings} // Use the correct property (timing)
  onChange={(e) => {
    handleInputChange(e); // Call the same handler to update the state
  }}
>
                    <option value="" disabled>
                      Select Appointment Time
                    </option>
                    <option value="5-6">5-6</option>
                    <option value="6-7">6-7</option>
                    <option value="7-8">7-8</option>
                    <option value="8-9">8-9</option>
                  </select>
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                  />
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  placeholder="Gender"
                />
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                />
                <button type="submit" className="btn-submit">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
          
          )}
        </>
      )}

      {role === 'Doctor' && (
        <div className='registered-container'> 
          <h2 style={{ textAlign: 'center', color: "blue", fontSize: "48px" }}>Registered Appointments</h2>
          <table className="table table-striped" style={{ color: 'white' }}>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Contact Number</th>
                <th>Current Status</th>
                <th>timings</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userAppointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.appointmentTime}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.contactNumber}</td>
                  <td>{appointment.status}</td>
                  <td>{appointment.timing}</td>
                  <td>
                    {appointment.status === 'scheduled' && (
                      <>
                        <button className="btn btn-success" onClick={() => handleStatusChange(appointment._id, 'confirmed')}>Confirm</button>
                        <button className="btn btn-danger" onClick={() => handleDeleteAppointment(appointment._id, 'canceled')}>Cancel</button>
                        {/* <button className="btn btn-secondary" onClick={() => handleStatusChange(appointment._id, 'completed')}>Complete</button> */}
                      </>
                    )}
                    {appointment.status === 'confirmed' && (
                      <button className="btn btn-primary btn-sm"  style={{ width: 'auto', paddingLeft: '10px', paddingRight: '10px' }} 
                      onClick={() => handleStatusChange(appointment._id, 'completed')}
                    >
                      Complete
                    </button>                    )}
                    {/* {appointment.status === 'cancelled' && (
                      <button className="btn btn-warning" onClick={() => handleDeleteAppointment(appointment._id)}>Delete</button>
                    )} */}
                    {(appointment.status === 'completed' || appointment.status === 'cancelled') && (<center>------</center>)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {role === 'Admin' && (
        <div className="all-appoint-container">
          <h2 
  style={{
    textAlign: 'center',
    color: 'blue !important',
    fontSize: '36px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease'
  }}
>
  All Appointments
</h2>

          <table className="table table-striped" style={{ color: 'white' }}>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Contact Number</th>
                <th>Current Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.appointmentTime}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.contactNumber}</td>
                  <td>{appointment.status}</td>
                  <td>
                    {appointment.status === 'scheduled' && (
                      <>
                        <button className="btn btn-success" onClick={() => handleStatusChange(appointment._id, 'confirmed')}>Confirm</button>
                        <button className="btn btn-danger" onClick={() => handleDeleteAppointment(appointment._id, 'canceled')}>Cancel</button>
                        <button className="btn btn-primary btn-sm"  style={{ width: 'auto', paddingLeft: '10px', paddingRight: '10px' }} 
                          onClick={() => handleStatusChange(appointment._id, 'completed')}
                        >
                          Complete
                        </button>

                      </>
                    )}
                    {/* <button className="button-delete" onClick={() => handleDeleteAppointment(appointment._id)}>Delete</button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {role === 'Patient' && (
        <div>
          <h2 style={{ textAlign: 'center', color: "blue", fontSize: "36px" }}>Upcoming Appointments</h2>
          <table className="table table-striped" style={{ color: 'white' }}>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userAppointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.doctorName}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.appointmentTime}</td>
                  <td>{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;