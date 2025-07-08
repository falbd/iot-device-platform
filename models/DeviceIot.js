const mongoose = require('mongoose');

const DeviceiotSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  type: String,
  location: String,
  apiKey: String,
  metadata: Object
});

module.exports = mongoose.model('DeviceIot', DeviceiotSchema);
