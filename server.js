const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/dbModel.js');


app.use(express.static('public'));
app.use(bodyParser());

app.post('/checkoutData', (req, res, next) => {
  db.create(req.body);
  res.json({"Message": "VERY NICEEE"});
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});