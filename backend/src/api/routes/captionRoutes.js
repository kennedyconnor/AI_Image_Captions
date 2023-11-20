const express = require('express');
const router = express.Router();
const captionController = require('../controllers/captionController');

router.post('/caption', captionController.getCaption);

module.exports = router;