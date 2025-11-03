const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Medicine = require('../models/Medicine');

router.post('/', auth, async (req,res)=>{
  const { ownerId, name, dosage, times, startDate, endDate, notes } = req.body;
  if (!name || !times || !startDate) return res.status(400).json({ message: 'Missing fields' });
  const med = new Medicine({
    family: req.user.family,
    owner: ownerId || req.user._id,
    name, dosage, times, startDate, endDate, notes
  });
  await med.save();
  res.json(med);
});

router.get('/', auth, async (req,res)=>{
  const meds = await Medicine.find({ family: req.user.family }).populate('owner','name email');
  res.json(meds);
});

router.put('/:id', auth, async (req,res)=>{
  const med = await Medicine.findById(req.params.id);
  if (!med) return res.status(404).json({ message: 'Not found' });
  Object.assign(med, req.body);
  await med.save();
  res.json(med);
});

router.delete('/:id', auth, async (req,res)=>{
  await Medicine.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
