const express = require('express');
const port = 3000;
const app = express();

app.use(express.static('public'));

// app.get('/', (req, res, next) => {
//   console.log('req received');
//   res.sendFile(__dirname + '/client/.html')
// });

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
})