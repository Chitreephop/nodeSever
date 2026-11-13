const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
  //res.send('Hello World!555 node.js is running myname is boat');
  res.sendFile(path.join(__dirname, 'webPage', 'index.html'));
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

