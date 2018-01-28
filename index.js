const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var userIsSleepingIn = false;
app.use(bodyParser.json()); // support json encoded bodies

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'));

app.get('/test', function (req, res) {
  console.log('hit');
  res.send('hit');
}
);
app.post('/newday', function (req, res) {
    userIsSleepingIn = false;
    res.send('reset');
  });

app.post('/sleep', function (req, res) {
    userIsSleepingIn = true;
    res.send('reset');
  });

app.get('/status', function (req, res) {
  res.send('The user is sleeping in: ' + userIsSleepingIn.toString());
});

app.post('/sleepingIn', function (req, res) {
  console.log('hit');
  let time = new Date();
  if (time.getHours() < 9 &&
    time.getHours() > 10)
  {
    res.send("the user doesn't have to be up");
  } else {
    userIsSleepingIn = true;
    res.send('The user is sleeping in');
  }
}
);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/users');

/* GET home page. */
