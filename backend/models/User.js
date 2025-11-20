const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'provider'], default: 'customer' },
  profile: {
    bio: String,
    services: [String],
    location: String,
    availability: [String],
    rating: { type: Number, default: 0 },
    photo: String
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);