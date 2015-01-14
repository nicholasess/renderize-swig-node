var express = require('express');
var App = express.Router();
var path = require( 'path' );
var controller = require(path.resolve(('controllers/franchise')));

App
  .route('/')
    .get(function(req, res){
      res.render('index');
    });

App
  .route('/franchises')
    .get(controller.findAllFranchises);

App
  .route('/create')
    .get(controller.create);

App
  .route('/edit/:id')
    .get(controller.edit)
    .put(controller.findById)
    .delete(controller.deleteFranchise)

module.exports = App;
