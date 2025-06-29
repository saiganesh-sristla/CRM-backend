const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  tag: { type: String, enum: ['Cold', 'Warm', 'Hot'] }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
