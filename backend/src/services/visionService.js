const vision = require('@google-cloud/vision');
const fs = require('fs');
// Creates a client using credentials from a JSON key file
const client = new vision.ImageAnnotatorClient();

exports.generateCaption = async (filePath) => {
  try {
     // Read the file into a buffer
     const fileBuffer = fs.readFileSync(filePath);
     // Convert the buffer to a base64 string
     const base64Image = fileBuffer.toString('base64');
 
    console.log("encoded file:", base64Image)
    const [result] = await client.labelDetection({ image: { content: base64Image } });

    const labels = result.labelAnnotations;
    // Extract descriptions from the labels
    const captions = labels.map(label => label.description);

    // Join the descriptions into a single string
    return captions.join(', ');
  } catch (error) {
    console.error('Error in Vision API:', error);
    throw error;
  }
};