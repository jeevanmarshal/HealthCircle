const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin','member','viewer'], default: 'member' },
  family: { type: mongoose.Schema.Types.ObjectId, ref: 'Family' },
  fcmToken: { type: String },
  createdAt: { type: Date, default: Date.now }
});

UserSchema.pre('save', async function(next){
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePassword = function(candidate){
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', UserSchema);
