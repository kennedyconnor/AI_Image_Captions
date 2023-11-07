import React from 'react';

import ImageUploadForm from '../components/ImageUploadForm'
function HomePage() {
  return (
    <div name="Home">
      <h1>AI Image Captioning by Connor Kennedy</h1>
      <h2>Welcome. Upload an Image File and receive a caption!</h2>
      <h3>Note: AI generation is WIP. You will receive a prewritten caption. Come back in the future!</h3>
      <ImageUploadForm />
    </div>
  );
};

export default HomePage;