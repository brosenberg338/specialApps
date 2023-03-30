var express = require('express');
var app = express();

const recipes = [{
    name: 'ice cream',
    ingredients: 'milk'
}];

/*function addARecipe(recipe) {
 let newRecipe= {
    name: recipe.name,
    ingredients: recipe.ingredients
 } 
    recipes.push( newRecipe);
    console.log(recipes);
};      */





app.use(function  (req, res, next) {
 //   recipes.push(req.ingredients);
    console.log(req);
});
  
console.log(recipes);
module.exports = app;