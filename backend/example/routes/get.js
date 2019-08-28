var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var redisClient = req.app.get('redisClient')
  redisClient.get('votes', (e, currentVotes) => {
    res.send(JSON.stringify({count: currentVotes}));
  });

});

module.exports = router;
