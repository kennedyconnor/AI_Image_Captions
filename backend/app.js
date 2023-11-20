const express = require('express');
const captionRoutes = require('./routes/captionRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', captionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;