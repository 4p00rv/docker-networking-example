var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var redisClient = req.app.get('redisClient')
  redisClient.get('votes', (e, currentVotes) => {
    res.render('view', {votes: currentVotes});
    console.log(e);
  });
});

module.exports = router;
