var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var ranval = Math.floor(Math.random());
    var ranval2 = Math.floor(Math.random());
    res.render('computation', { title: 'Achyutha reddy\'s computaion page', result:`Math.imul(x, y)  applied to ${ranval, ranval2} is ${Math.expm1(ranval, ranval2)}`});

});

module.exports = router;