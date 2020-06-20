const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// API Endpoint: /rooms/:property_id/photos
app.get('/rooms/:property_id/photos', (req, res) => {
  var property_id = req.params.property_id;
  db.connection.query('SELECT * FROM photos WHERE property_id = ?', [property_id], function(error, results, fields){
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

// API Endpoint: /rooms/:property_id/photos/:photo_id
app.get('/rooms/:property_id/photos/:photo_id', (req, res) => {
  var property_id = req.params.property_id;
  var photo_id = req.params.photo_id;
  db.connection.query('SELECT * FROM photos WHERE property_id = ? and photo_id = ?', [property_id, photo_id], function(error, results, fields){
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
