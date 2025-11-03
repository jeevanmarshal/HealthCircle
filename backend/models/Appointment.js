const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  family: { type: mongoose.Schema.Types.ObjectId, ref: 'Family', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctorName: { type: String },
  hospital: { type: String },
  date: { type: Date, required: true },
  time: { type: String },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
