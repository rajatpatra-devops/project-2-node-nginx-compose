const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('👋 Hello from Node.js App behind Nginx Reverse Proxy!');
});

app.listen(3000);

