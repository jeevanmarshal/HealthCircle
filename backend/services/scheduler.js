const cron = require('node-cron');
const Medicine = require('../models/Medicine');
const User = require('../models/User');
const notifier = require('./notifier');

function startScheduler() {
  cron.schedule('* * * * *', async () => {
    try {
      const now = new Date();
      const hhmm = now.toTimeString().slice(0,5); // "HH:MM"
      const meds = await Medicine.find({ active: true, times: hhmm, startDate: { $lte: now }, $or: [ { endDate: null }, { endDate: { $gte: now } } ] }).populate('owner');
      for (const med of meds) {
        const user = med.owner;
        const message = `Reminder: ${user.name}, time to take ${med.name} (${med.dosage || ''})`;
        if (user.email) await notifier.sendEmail(user.email, 'Medicine Reminder', message, { family: med.family, user: user._id });
        if (user.phone) await notifier.sendSMS(user.phone, message, { family: med.family, user: user._id });
        console.log('Reminder sent:', message);
      }
    } catch (err) {
      console.error('Scheduler error', err);
    }
  });
  console.log('Scheduler started');
}

module.exports = { startScheduler };
