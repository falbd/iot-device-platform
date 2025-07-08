const express = require('express');
const router = express.Router();
const { pushTelemetry, getTelemetryByDevice } = require('../controllers/telemetryController');

// POST: Push telemetry data
router.post('/', pushTelemetry);

// GET: Retrieve telemetry data for a specific device by its ID
router.get('/:deviceId', getTelemetryByDevice);

module.exports = router;

