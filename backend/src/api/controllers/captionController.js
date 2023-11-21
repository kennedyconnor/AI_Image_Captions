const visionService = require('../../services/visionService');

exports.getCaption = async (req, res) => {
  try {
    const image = req.body.image; // The image is sent in the request body
    const caption = await visionService.generateCaption(image);
    res.status(200).json({ caption });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};