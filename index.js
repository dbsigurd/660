const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var app = express();
var router = express.Router();

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/users');

/* GET home page. */

router.post('/test', function (req, res) {
    console.log('hit');
    res.send('hit');
  }
);
router.get('/test', function (req, res) {
    console.log('hit');
    res.send('hit');
  }
);
