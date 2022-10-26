var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var ranval = Math.floor(Math.random() * 10);
    var ranval2 = Math.floor(Math.random()*20);
    res.render('computation', { title: 'Achyutha reddy\'s computaion page', results:`Math.imul(x, y)  applied to ${ranval}, ${ranval2} is ${Math.imul(ranval, ranval2)}`});

});

module.exports = router;