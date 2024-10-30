const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const flashcardRoute = require('./routes/flashcardsRoute');
require('dotenv').config();

const app = express();
app.use(express.json());
const port = 3001;
const dbUri = process.env.URI;

app.use(cors());
app.use('/api/flashcards', flashcardRoute);

mongoose
  .connect(dbUri)
  .then(() => {
    console.log('Connected to database');
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log('Connection failed');
  });
