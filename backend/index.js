require('dotenv').config();
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS); // For debugging
const express = require('express');
const app = require('./app'); // import app from app.js


// ... other middleware or routes ...

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

