var express= require('express');
var router =  express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url= 'mongodb://localhost:27017/lists';
router.get('/', function(req,res,err){
    res.render('index.html');
});

module.exports = router;