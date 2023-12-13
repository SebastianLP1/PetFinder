//create express server
const express = require('express'); 
const app = express();

//create routes for API endpoints
app.get('/', function (req, res) {
    res.send('Home Page')
  });

  app.get('/api/v1/pets', function (req, res) {
    res.send('Bear Guinea Birdie Minnow Bunny Duckie Goose Bucky')
  });

  app.get('/api/v1/pets/owner', (req, res) => {
    res.send(`List of Owners`);
  });

  app.get('/api/v1/pets/:name', function (req, res) {
    const name = req.params.name
    res.send(`The pet you have searched for is called ${name}`)
  });



//write Port function and message to verify Port status
const PORT= 8081
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); });