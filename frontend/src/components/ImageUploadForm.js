import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ImageUploadForm.css';

export default function ImageUploadForm() {
  //Set State
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidImage, setIsValidImage] = useState(false);
  const [imageImgurURL, setImageImgurURL] = useState(null);
  const navigate = useNavigate();

  // Function for handling file changes
  function handleFileChange(event) {
    setImageFile(event.target.files[0]);
  }

  // Form Submission Function
  async function handleFormSubmit(event) {
    event.preventDefault();
    if (!imageFile) {
      alert('Please choose an image file to upload!');
      return;
    }

    setIsLoading(true); // display loading message for user

    try {
      await validateImage()
      const caption = await fetchCaption();
      // If successful, navigate to captiondisplay page
      navigate('/caption-page', {
        replace: true,
        state: {
          imageFile: imageFile,
          caption: caption, 
          imgurURL: imageImgurURL
        }
      });
  }
  catch(error){
    console.error(error);
    alert('Failed to fetch caption.');
  }
  finally {
    setIsLoading(false); // set loading to false when done
  }
}

  // async image upload function
  async function fetchCaption() {
    try {
      // Set up form data as an image file before POSTing

      const formData = new FormData();
      formData.append('image', imageFile)
      const response = await axios.post(`https://ai-image-generation-405112.uk.r.appspot.com/api/caption`, formData, {
       // headers: { 'Content-Type': 'multipart/form-data'}
       });

       if (response.data && response.data.caption){
        console.log(response.data)
        return response.data.caption
       } else {
        throw new Error('Caption not received.');
       }
    }
    catch (error) {
       console.error('Error:', error);
       throw error;
      }
  }

  async function uploadImageToImgur() {
    const formData = new FormData();
    formData.append('image', imageFile);
  
    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: 'Client-ID 3dbd2e6093a87bd'
      },
      body: formData,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch('https://api.imgur.com/3/image', requestOptions);
      const result = await response.json();
      if(result.data.link){
        setImageImgurURL(result.data.link);
      };
      return result.data.link; // URL of the uploaded image
    } catch (error) {
      console.error('Error uploading image to Imgur:', error);
      throw error;
    }
  }

  async function validateImage(){
    const imgurURL = await uploadImageToImgur();    // upload to imgur for file reading
    try {
      const imageStats = await axios.get(`http://localhost:4000/analyze-image?url=${imgurURL}`)
      if(imageStats){
        setIsValidImage(true)
      }
      return imageStats
    } catch(error){
      console.error('Error validating image with partner microservice');
      throw error;
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload Image</button>
      {isValidImage && <p>Valid Image File!</p>}
      {isLoading && <p>Generating Caption...</p>} 
    </form>
  );
};