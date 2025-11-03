const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  family: { type: mongoose.Schema.Types.ObjectId, ref: 'Family', required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  dosage: { type: String },
  times: [{ type: String }], // "HH:mm"
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  notes: { type: String },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Medicine', MedicineSchema);
