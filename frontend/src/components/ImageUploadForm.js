import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ImageUploadForm.css';

export default function ImageUploadForm() {
  //Set State
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  // Function for handling file changes
  function handleFileChange(event) {
    setImageFile(event.target.files[0]);
  }

  // Form Submission Function
  function handleFormSubmit(event) {
    event.preventDefault();
    if (!imageFile) {
      alert('Please choose an image file to upload!');
      return;
    }

    // If successful, navigate to captiondisplay page
    navigate('/caption-page', {
      replace: true,
      state: {
        imageFile: imageFile,
        caption: "This is a dummy caption."
      }
    });
  }

  // Set up form data as an image file before POSTing
  const formData = new FormData();
  formData.append('image', imageFile)

  // async image upload function
  async function uploadImageFile() {
    try {
      // Comment out api call until backend is implemented
      //const response = await axios.post('http://backend-todo/image-api/upload', formData, {
      //  headers: { 'Content-Type': 'multipart/form-data' }
      // });
      // console.log(response.data);
    }
    catch (error) { console.error(error) }
  }

  uploadImageFile(); // Call function to upload file


  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload Image</button>
    </form>
  );
};