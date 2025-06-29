const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  status: { type: String, enum: ['Open', 'Won', 'Lost'], default: 'Open' },
  contact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
}, { timestamps: true });

module.exports = mongoose.model('Deal', dealSchema);
