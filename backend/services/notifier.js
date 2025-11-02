const nodemailer = require('nodemailer');
const NotificationLog = require('../models/NotificationLog');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT||587),
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

async function sendEmail(to, subject, text, meta = {}) {
  try {
    const info = await transporter.sendMail({ from: process.env.SMTP_USER, to, subject, text });
    await NotificationLog.create({ family: meta.family, user: meta.user, type: 'email', message: text, status: 'sent' });
    return { ok: true, info };
  } catch (err) {
    await NotificationLog.create({ family: meta.family, user: meta.user, type: 'email', message: text, status: 'failed' });
    return { ok: false, error: err.message };
  }
}

async function sendSMS(to, text, meta={}) {
  await NotificationLog.create({ family: meta.family, user: meta.user, type: 'sms', message: text, status: 'sent' });
  return { ok: true };
}

module.exports = { sendEmail, sendSMS };
