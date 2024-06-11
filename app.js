const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentsRoutes = require('./routes/students');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/students', studentsRoutes);

module.exports = app;