// otp.js
const User = require('../User');

async function generateOtp(userId) {
  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  const expiry = Date.now() + 5 * 60 * 1000; // 5 min expiry

  const user = await User.findById(userId);
  user.otp = otp;
  user.otpExpiry = expiry;
  await user.save();

  // Send OTP via email/SMS
  sendOtpEmail(user.email, otp); // you can implement sendOtpEmail separately
  return otp;
}

async function verifyOtp(userId, otp) {
  const user = await User.findById(userId);
  if (!user || user.otp !== Number(otp) || Date.now() > user.otpExpiry) {
    throw new Error('Invalid or expired OTP');
  }

  // Clear OTP after successful verification
  user.otp = null;
  user.otpExpiry = null;
  await user.save();
  return true;
}

module.exports = { generateOtp, verifyOtp };
