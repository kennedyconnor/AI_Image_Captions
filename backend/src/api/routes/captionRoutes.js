const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const captionController = require('../controllers/captionController');

//router.post('/caption', captionController.getCaption);
router.post('/caption', upload.single('image'), captionController.getCaption);
module.exports = router;