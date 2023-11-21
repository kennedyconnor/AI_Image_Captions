const express = require('express');
const cors = require('cors');
const captionRoutes = require('./src/api/routes/captionRoutes');

const app = express();

app.use(cors());
//app.options('*', cors());
app.use(express.json());
app.use('/api', captionRoutes);

module.exports = app;