var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Achyutha Reddy Gantla' });
});

module.exports = router;
