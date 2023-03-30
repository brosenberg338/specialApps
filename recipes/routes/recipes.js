var express = require('express');
var router = express.Router();

    router.get('/', function(req, res, next) {

connection.query('SELECT *  FROM recipe', function (error, results, fields) {
  
    if (error) throw error;
 
  
res.render('recipes', { title: 'Recipes', 
  recipes: results,
  
  });
 
});


});

 module.exports =router;

