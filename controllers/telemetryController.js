const Telemetry = require('../models/TelemetryIot');
const Device = require('../models/DeviceIot');

// POST: Push telemetry data
exports.pushTelemetry = async (req, res) => {
  const { apiKey, data } = req.body;

  try {
    const device = await Device.findOne({ apiKey });
    if (!device) return res.status(404).json({ msg: 'Device not found' });

    const telemetry = new Telemetry({
      deviceId: device._id,
      data
    });
    await telemetry.save();

    // Emit via Socket.IO
    req.io.to(device._id.toString()).emit('telemetry', telemetry);

    res.json({ msg: 'Telemetry saved' });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// GET: Retrieve telemetry data for a device
exports.getTelemetryByDevice = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const telemetry = await Telemetry.find({ deviceId }).sort({ timestamp: -1 });
    res.json(telemetry);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
