const visionService = require('../../services/visionService');

exports.getCaption = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No image file uploaded.');
    }

    console.log("Controller request body: ", req.file.path)
    const caption = await visionService.generateCaption(req.file.path);
    res.status(200).json({ caption });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};