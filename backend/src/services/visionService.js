const vision = require('@google-cloud/vision');

// Creates a client using credentials from a JSON key file
const client = new vision.ImageAnnotatorClient();

exports.generateCaption = async (image) => {
  try {
    // make sure credentials are correct
    console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
    // Assuming 'image' is a base64-encoded image string
    const [result] = await client.labelDetection({ image: { content: image } });
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