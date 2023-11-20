const express = require('express');
require('dotenv').config();
const app = express();

// ... other middleware or routes ...

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});