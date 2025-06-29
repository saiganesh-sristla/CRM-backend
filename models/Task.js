const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  relatedTo: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'relationModel'
  },
  relationModel: {
    type: String,
    enum: ['Company', 'Contact', 'Deal']
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
