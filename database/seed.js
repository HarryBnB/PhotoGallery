const db  = require('./index.js');
const faker = require('faker');

const photos = [
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/18b25b60-76a3-4d3b-9dbb-f16bbef21e4f.jpg',
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/1a98cbcf-5d37-4efb-8786-57a74c38a267.jpg',
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/1cc58c90-4ae0-4e5b-8303-678ccdc7ff81.jpg',
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/50a6cfbf-4ee1-4c82-a78c-7ab57ffff620.jpg',
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/6f33bcc4-99d9-47fc-aac8-333d68e9fded.jpg',
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/71ae7b11-15ea-4ae9-8aaa-78ccb125a619.jpg',
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/74ae9bfa-709c-467b-8295-140488b7dad9.jpg',
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/946d0ef8-8df7-4d5f-a850-e41b187ea6f9.jpg',
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/a5261e46-9a0f-458a-bc8c-463ad55f2ab2.jpg',
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/aa855d14-946d-4a50-bbfa-e372c2e346b3.jpg',
  'https://airbnb-photos-backup.s3.us-east-2.amazonaws.com/f2b2012e-5772-4cef-8afc-b50901b627f2.jpg'
]

const createData = function(callback=()=>{}){
  for(var property = 0; property < 100; property++){
    var propertyID = property;
    var photoID = 0;
    while(photoID < photos.length){
      var randomURL = photos[Math.floor(Math.random() * photos.length)];
      var intro = faker.lorem.sentence();

      // mysql query
      db.connection.query('INSERT INTO photos (photo_url, intro, property_id) VALUES(?, ?, ?)', [randomURL, intro, propertyID], function (err, rows, fields) {
        if (err) {
          console.log('Failed to create data', err);
          callback(err);
        } else {
          console.log('Success to create data');
          callback(null);
        }
      });

      photoID++;
    }
  }
  console.log('All data are created');
};

createData();
