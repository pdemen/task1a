var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test_no2', function(req, res, next) {
  res.send('Here is what we\'ve got ' + req.body);
});

module.exports = router;
