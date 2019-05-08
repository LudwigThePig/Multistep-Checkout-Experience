const express = require('express');
const port = 3000;
const app = express();
const db = require('./db/dbModel.js');


app.use(express.static('public'));

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});