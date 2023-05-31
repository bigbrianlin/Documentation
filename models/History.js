const mongoose = require('mongoose');

const HistorySchema = mongoose.Schema({
  userName: {
    type: mongoose.Schema.Types.String,
    ref: 'users',
  },
  documentId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('history', HistorySchema);
