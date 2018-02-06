var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res) {
  res.send('Here is what we\'ve got ' + req.body.dirpath);
});

module.exports = router;
