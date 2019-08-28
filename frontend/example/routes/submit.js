var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var redisClient = req.app.get('redisClient')
  redisClient.incr('votes')
  res.render('submit', {title: 'Vote'});
});

router.get('/', function(req, res, next) {
  res.render('submit', {title: 'Vote'});
});

module.exports = router;
