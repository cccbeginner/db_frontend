const express = require('express');
const app = express();
const port = 3000;
const House = require('./house.js')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

test_houses=[
  new House('https://www.dd-room.com/','https://dummyimage.com/450x300/dee2e6/6c757d.jpg', 'House title 1', '5000'),
  new House('https://www.dd-room.com/','https://dummyimage.com/450x300/dee2e6/6c757d.jpg', 'House title 2', '9000'),
  new House('https://www.dd-room.com/','https://dummyimage.com/450x300/dee2e6/6c757d.jpg', 'House title 3', '7000'),
  new House('https://www.dd-room.com/','https://dummyimage.com/450x300/dee2e6/6c757d.jpg', 'House title 4', '6000'),
  new House('https://www.dd-room.com/','https://dummyimage.com/450x300/dee2e6/6c757d.jpg', 'House title 5', '6500'),
  new House('https://www.dd-room.com/','https://dummyimage.com/450x300/dee2e6/6c757d.jpg', 'House title 6', '5500')
]

app.get('/', (req, res) => {
  res.render('index', { title: 'My Node Project' , houses: test_houses});
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
