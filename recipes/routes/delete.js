var express = require('express');
var router = express.Router();

  router.get('/:id', function(req, res, next) {

res.end(`Do you want to delete item # ${req.params.id} ?`);

});

 module.exports =router;     