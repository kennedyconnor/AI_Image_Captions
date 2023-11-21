const express = require('express');
const app = require('./app'); // import app from app.js

require('dotenv').config();

// ... other middleware or routes ...

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

