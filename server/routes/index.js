var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Education Portal',
    info: 'You can find here some useful inforamtion about educational institutions of Lviv!' 
  });
});

module.exports = router;
