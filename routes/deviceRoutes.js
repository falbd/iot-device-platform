const express = require('express');
const router = express.Router();
const { registerDevice, getDevices } = require('../controllers/deviceController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, registerDevice);
router.get('/', protect, getDevices);

module.exports = router;
