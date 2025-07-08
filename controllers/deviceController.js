const Device = require('../models/DeviceIot');
const crypto = require('crypto');

exports.registerDevice = async (req, res) => {
  const { name, type, location, metadata } = req.body;
  try {
    const apiKey = crypto.randomBytes(16).toString('hex');
    const device = new Device({
      userId: req.user.id,
      name,
      type,
      location,
      metadata,
      apiKey
    });
    await device.save();
    res.json(device);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDevices = async (req, res) => {
  const devices = await Device.find({ userId: req.user.id });
  res.json(devices);
};
