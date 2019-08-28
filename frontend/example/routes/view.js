var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var redisClient = req.app.get('redisClient')
  var backendHost = req.app.get('backend')
  if ( redisClient.connected ) {
    redisClient.get('votes', (e, currentVotes) => {
      res.render('view', {votes: currentVotes, redis: true});
      if (e) console.log(e);
    });
  } else {
    request(`http://${backendHost}/get`, { json: true }, (err, resp, body) => {
      if (err) { return console.log(err); }
      res.render('view', {votes: body.count, redis: false})
    })
  }
});

module.exports = router;
