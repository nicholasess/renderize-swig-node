var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/obj', function(req, res) {
  var obj = {
  	name: 'Nicholas'
  };
  res.render('obj', { obj:  obj});
});

router.get('/array', function(req, res) {
  var array = [{
  	name: 'Nicholas'
  },{
  	name: 'Eduardo'
  }];
  res.render('array', { array: array });
});

module.exports = router;
