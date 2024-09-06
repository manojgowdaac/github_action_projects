// Import express
const express = require('express');
const app = express();
const port = 3000;

// Serve static files like CSS and images
app.use(express.static('public'));

// Handle the home route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Node.js Website</title>
        <link rel="stylesheet" type="text/css" href="style.css">
      </head>
      <body>
        <h1>Welcome to My Node.js Website!</h1>
        <p>This is a simple website created with Node.js and Express.</p>
        <img src="logo.png" alt="Website logo" width="200">
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Website is live at http://localhost:${port}`);
});

