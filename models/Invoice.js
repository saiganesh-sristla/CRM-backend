const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  deal: { type: mongoose.Schema.Types.ObjectId, ref: 'Deal' },
  invoiceNumber: Number,
  date: Date,
  amount: Number
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);