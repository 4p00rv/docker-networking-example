var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.post('/', function(req, res, next) {
  var redisClient = req.app.get('redisClient')
  var backendHost = req.app.get('backend')
  if(redisClient.connected) {
    redisClient.incr('votes')
  } else {
    request(`http://${backendHost}/submit`, { json: true }, (err, res, body) => {
      if (err) { console.log(err); }
    })
  }
  res.render('submit', {title: 'Vote', redis: redisClient.connected});
});

router.get('/', function(req, res, next) {
  res.render('submit', {title: 'Vote'});
});

module.exports = router;
