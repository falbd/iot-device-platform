const mongoose = require('mongoose');

const TelemetryiotSchema = new mongoose.Schema({
  deviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
  data: Object,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TelemetryIot', TelemetryiotSchema);
