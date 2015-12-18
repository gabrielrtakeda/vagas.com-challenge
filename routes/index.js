// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// exports.partials = function (req, res) {
//   var name = req.params.name;
//   res.render('partials/' + name);
// };

// module.exports = router;

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.directives = function (req, res) {
  var name = req.params.name;
  res.render('directives/' + name);
};
