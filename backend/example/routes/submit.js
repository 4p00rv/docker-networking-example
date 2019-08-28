var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var redisClient = req.app.get('redisClient')
  redisClient.incr('votes')
  res.send(JSON.stringify({success: true}));
});

module.exports = router;
