var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var ranval = Math.floor(Math.random() * 10);
    var ranval2 = Math.floor(Math.random()*20);
    res.render('computation', { title: 'Achyutha reddy\'s computaion page', 
        result1:`Math.imul(x, y)  applied to ${ranval}, ${ranval2} is ${Math.imul(ranval, ranval2)}`,
         result2: `Math.log(x)  applied to ${ranval} is ${Math.log(ranval)}`,
         result3: `Math.log10(x)  applied to ${ranval2} is ${Math.log10(ranval2)}`,


    });

});

module.exports = router;