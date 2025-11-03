const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Family = require('../models/Family');
const User = require('../models/User');

router.post('/', auth, async (req,res)=>{
  const { familyName } = req.body;
  if (!familyName) return res.status(400).json({ message: 'familyName required' });
  const family = new Family({ familyName, createdBy: req.user._id, members: [req.user._id] });
  await family.save();
  req.user.family = family._id;
  await req.user.save();
  res.json(family);
});

router.post('/add-member', auth, async (req,res)=>{
  const { email, name, role } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    user = new User({ name, email, password: Math.random().toString(36).slice(-8), role: role || 'member', family: req.user.family });
    await user.save();
  } else {
    user.family = req.user.family;
    user.role = role || user.role;
    await user.save();
  }
  const family = await Family.findById(req.user.family);
  if (!family.members.includes(user._id)) { family.members.push(user._id); await family.save(); }
  res.json({ message: 'Member added', user });
});

router.get('/', auth, async (req,res)=>{
  const family = await Family.findById(req.user.family).populate('members','-password');
  res.json(family);
});

module.exports = router;
