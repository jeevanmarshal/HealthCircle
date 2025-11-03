const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Appointment = require('../models/Appointment');

router.post('/', auth, async (req,res)=>{
  const { userId, doctorName, hospital, date, time, notes } = req.body;
  if (!date || !userId) return res.status(400).json({ message: 'Missing fields' });
  const app = new Appointment({ family: req.user.family, user: userId, doctorName, hospital, date, time, notes });
  await app.save();
  res.json(app);
});

router.get('/', auth, async (req,res)=>{
  const apps = await Appointment.find({ family: req.user.family }).populate('user','name');
  res.json(apps);
});

router.delete('/:id', auth, async (req,res)=>{
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
