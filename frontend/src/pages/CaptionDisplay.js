import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import LoadingCaption from '../components/LoadingCaption'
import ImageCaption from '../components/ImageCaption'

function CaptionDisplay() {
  const location = useLocation();
  const [imageSrc, setImageSrc] = React.useState('');
  const { imageFile, caption, imageStats } = location.state || {};

  // Remember to revoke the object URL to release memory when the component unmounts
  React.useEffect(() => {
    if (imageFile) {
      const imageURL = URL.createObjectURL(imageFile) // create local URL to display image
      setImageSrc(imageURL)
    }
    return () => {
      URL.revokeObjectURL(imageSrc);
    };
  }, [imageFile]);

  return (
    <div name="CaptionDisplay">
      <Link to="/">Go to Home</Link> {/* Home button */}
      <h1>Your Image:</h1>
      {imageSrc ? (
        <div>
          <img src={imageSrc} alt="Uploaded" />
          <p><b>Caption: </b> {caption}</p> {/* Display the caption */}
          <p><b>Stats: </b> {imageStats}</p>
        </div>
      ) : (
        <p>No image to display</p>
      )}
    </div>
  );
}

export default CaptionDisplay;