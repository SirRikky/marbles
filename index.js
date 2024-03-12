const express = require('express');
const path = require('path'); // Add this line to use the 'path' module
const app = express();

app.set('view engine', 'ejs');

// Use the 'path' module to create an absolute path to the 'images' folder
const imagesPath = path.join(__dirname, 'images');

// Serve static files from the 'images' folder
app.use('/images', express.static(imagesPath));

// Your route for rendering the page
app.get('/', (req, res) => {
  const racers = [
    { name: 'Ned', image: 'Ned.jpg', wins: 0 },
    { name: 'Andy', image: 'Andy.jpg', wins: 0 },
    { name: 'Ben', image: 'Ben.jpg', wins: 0 },
  ];

  res.render('index', { racers });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
