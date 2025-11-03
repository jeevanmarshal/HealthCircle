const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Medicine = require('../models/Medicine');
const Appointment = require('../models/Appointment');
const NotificationLog = require('../models/NotificationLog');

router.get('/stats', auth, async (req,res)=>{
  const medsCount = await Medicine.countDocuments({ family: req.user.family });
  const upcomingApps = await Appointment.find({ family: req.user.family, date: { $gte: new Date() } }).count();
  const recentNotifications = await NotificationLog.find({ family: req.user.family }).sort({ sentAt: -1 }).limit(10);
  res.json({ medsCount, upcomingApps, recentNotifications });
});

module.exports = router;
