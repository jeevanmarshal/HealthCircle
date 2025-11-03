const mongoose = require('mongoose');

const NotificationLogSchema = new mongoose.Schema({
  family: { type: mongoose.Schema.Types.ObjectId, ref: 'Family' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String },
  message: { type: String },
  sentAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['sent','failed','pending'], default: 'pending' }
});

module.exports = mongoose.model('NotificationLog', NotificationLogSchema);
