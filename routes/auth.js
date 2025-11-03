const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Family = require('../models/Family');

router.post('/register', async (req,res)=>{
  try {
    const { name,email,password,phone,familyName } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'Missing fields' });
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'Email exists' });
    user = new User({ name,email,password,phone });
    if (familyName) {
      const family = new Family({ familyName, createdBy: user._id, members: [] });
      await family.save();
      user.family = family._id;
      family.members.push(user._id);
      await family.save();
    }
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, family: user.family }});
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/login', async (req,res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate('family');
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const ok = await user.comparePassword(password);
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, family: user.family }});
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;
