const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  patientemail:{
    type:String,
    required:true
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['scheduled', 'confirmed', 'canceled', 'completed'],
    default: 'scheduled',
  },
  doctorName: {
    type: String,
    required: true,
  },
  doctorEmail: {
    type: String,
    required: true,
  },
  timings:{
    type: String,
    required: false
  }
});

const Appointment = mongoose.model('appointments', appointmentSchema);

module.exports = Appointment;
