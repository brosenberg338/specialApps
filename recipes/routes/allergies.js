var express = require('express');
let app = express();
let router = express.Router();
const SQL = require('sql-template-strings')
//let recipes = require('./recipes.js');
let dairyIngredients = ['milk', 'cheese', 'heavy cream', 'butter', 'cream cheese'
];

router.get('/', function (req, res, next) {

  res.render('allergies', {
    title: 'allergy page',
  });
});

router.post('/', function (req, res, next) {

  let allergy1 = req.body.allergy1 || '';
  let allergy2 = req.body.allergy2 || '';
  let allergy3 = req.body.allergy3 || '';

 // connection.query(SQL` SELECT *  FROM recipe `, function (error, results, fields) {
//  connection.query('SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = recipe ' , function (error, results, fields) {
   // connection.query("SELECT * FROM recipe WHERE ingredient1 NOT IN 'fish' " , function (error, results, fields) {
 
   connection.query(SQL` SELECT *  FROM recipe WHERE NOT ingredient1 = ${allergy1} &&  NOT ingredient1 = ${allergy2} 
    &&  NOT ingredient1 = ${allergy3} && NOT ingredient2 = ${allergy1} &&  NOT ingredient2 = ${allergy2} 
    &&  NOT ingredient2 = ${allergy3} && NOT ingredient3 = ${allergy1} &&  NOT ingredient3 = ${allergy2} 
    &&  NOT ingredient3 = ${allergy3} && NOT ingredient4 = ${allergy1} &&  NOT ingredient4 = ${allergy2} 
    &&  NOT ingredient4 = ${allergy3}`, function (error, results, fields)   {
  if (error) throw error;
    

  res.render('recipes', {
    title: 'Recipes',
    recipes: results
  });
});
});

module.exports = router;
