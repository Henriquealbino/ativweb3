var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/cool/beach', function(req, res, next) {
  res.send('tranquilin na praia');
});
/* GET users listing. */
router.get('/cool', function(req, res, next) {
  res.send('voçe é muito legal');
});
/* GET users listing. */
router.get('/ifc', function(req, res, next) {
  res.send('CLASH ROYALE,CLASH OF CLANS, FREE FIRE, BOLOONS TD6,VAXCO');
});

module.exports = router;
