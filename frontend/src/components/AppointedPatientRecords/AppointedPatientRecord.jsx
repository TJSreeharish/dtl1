import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backgroundVideo from "./dback.mp4";
import "./AppointedPatientrecords.css"; // Import a CSS file for styling

const AppointedPatientRecord = () => {
  const [records, setRecords] = useState([]);
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);//for doctors appointments
  const [mergedAppointments, setMergedAppointments] = useState([]);
  const [formData, setFormData] = useState({
      patientName: '',
      appointmentDate: '',
      appointmentTime: '',
      age: '',
      gender: '',
      contactNumber: '',
      summary: ''
    });
  const backend_url = import.meta.env.VITE_JS_BACKEND_URL;

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const role = localStorage.getItem('role');
        const email = localStorage.getItem('email');
        let result;
        if (role === 'Doctor') {
        result = await axios.get('http://localhost:3001/patients');
        setPatients(result.data);
        console.log("result.data",result.data);
        // console.log("patients",patients);
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    fetchPatients();
    let isMounted = true;    
    return () => {
      isMounted = false;
    };
  }, []);
  useEffect(() => {
    const role = localStorage.getItem('role');
    const email = localStorage.getItem('email');
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backend_url}/appointments`);
        const allAppointments = response.data;
        console.log(allAppointments);
        
        // Filter appointments for logged-in doctor
        if (role === 'Doctor') {
          const filteredAppointments = allAppointments.filter(
            (appointment) => appointment.doctorEmail === email
          );
          console.log("filtered Appointments",filteredAppointments);
          
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
  useEffect(() => {
      if (patients.length > 0 && appointments.length > 0) {
        console.log("inside",appointments,"and patients",patients);
      const updatedAppointments = appointments.map(appointment => {
        const matchingPatient = patients.find(patient => patient.email === appointment.patientemail);
        return {
          ...appointment,
          summary: matchingPatient ? matchingPatient.summary : 'No summary available'
        };
      });
      console.log("Updated data list to be displayed: ", updatedAppointments);
      setMergedAppointments(updatedAppointments); // Use a separate state
    }
  }, [patients, appointments]);
  
  return (
    <div className="medical-records-container">
        <video 
  autoPlay 
  muted 
  loop 
  id="background-video" 
  style={{
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1',
  }}
>
  <source src={backgroundVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <div className="header">
        <Link
          to={
            localStorage.getItem("role") === "Admin"
              ? "/home"
              : localStorage.getItem("role") === "Patient"
              ? "/patdash"
              : "/docdash"
          }
          style={{ position: "absolute", top: "20px", left: "20px" }}
        >
          <button className="btn btn-primary" style={{fontSize:"20px"}}>Dashboard</button>
        </Link>
      </div>

      <h1 style={{ display: "block", textAlign: "center", marginTop: "70px" ,color: "darkblue",fontSize: "50px"}}>
        Medical Records
      </h1>
          {/*Add appointment table here with one more column for ehr summary*/}
          {localStorage.getItem('role') === 'Doctor' && (
        <div className='registered-container'> 
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
                <th>EHR Summary</th>
              </tr>
            </thead>
            <tbody>
              {mergedAppointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.appointmentTime}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.contactNumber}</td>
                  <td>{appointment.status}</td>
                  <td>{appointment.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AppointedPatientRecord;
