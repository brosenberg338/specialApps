const express = require('express');
const router = express.Router();


router.route('/')
    .get(function (req, res, next) {
        res.render('recipeForm', { title: 'Recipe Form' });

    })
    .post ( function (req, res, next)  {
     //    if (req.recipeName == "baked apples") {
     //y
           console.log(req.recipeName);
           
        connection.query('INSERT INTO recipe (recipeName, ingredient1, ingredient2, ingredient3, ingredient4) VALUES(?, ?, ?, ?,?)', 
        [req.body.recipeName, req.body.ingredient1, req.body.ingredient2, req.body.ingredient3, req.body.ingredient4], (error, results, fields) => {           
             if (error) throw error;
           console.log(results);
      
       res.redirect('./recipes');
 });
//};
});

   

module.exports = router;    
