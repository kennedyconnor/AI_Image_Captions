import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ImageUploadForm.css';

export default function ImageUploadForm() {
  //Set State
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
      const caption = await fetchCaption();
      // If successful, navigate to captiondisplay page
      navigate('/caption-page', {
        replace: true,
        state: {
          imageFile: imageFile,
          caption: caption
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
      console.log("Data being sent to API: ")
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      const response = await axios.post('http://localhost:5000/api/caption', formData, {
       // headers: { 'Content-Type': 'multipart/form-data'}
       });
       console.log(response.data);

       if (response.data && response.data.caption){
        return response.data.caption
       } else {
        throw new Error('Caption not received.');
       }
    }
    catch (error) {
       console.error('Error fetching caption.', error);
       throw error;
      }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload Image</button>
      {isLoading && <p>Generating Caption...</p>} 
    </form>
  );
};