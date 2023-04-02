const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.render('index', { title: 'My Node Project' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
