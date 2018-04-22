var express= require('express');
var router =  express.Router();
//var mongo = require('mongodb').MongoClient;

// var url= "mongodb://localhost:27017/lists";
const List=require('../models/lists');
router.get('/tasks',(req,res,next)=>{
    List.find(function(err,lists){
    res.json(lists);
})
});

router.get('/task/:id',(req,res,next)=>{
    List.findOne({_id: req.params.id},function (err,result){
    if(err){
        res.json(err);
    }
    else{
        res.json(result);
    }
});
});

router.put('/task/:id',(req,res,next)=>{
    var task= req.body;
var updTask = {};

if(task.title){
    updTask.title= task.title;
}

List.update({_id: req.params.id},updTask,{},function (err,result){
    if(err){
        res.json(err);
    }
    else{
        res.json(result);
    }
});
});


router.post('/task',(req,res,next)=>{
    //logic to add contacts
    let newList=new List({
        title:req.body.title
    });

newList.save((err,task)=>{
    if(err){
        res.json({msg:'Failed to add'});
    }
    else{
        res.json({msg:'Task added successfully'});
}
});
});

//delete contacts
router.delete('/task/:id',(req,res,next)=>{
    List.remove({_id: req.params.id},function (err,result){
    if(err){
        res.json(err);
    }
    else{
        res.json(result);
    }
});
});

// router.get('/tasks', function(req,res,next){
//  mongo.connect(url, function(err, db){
//      if(err) throw err;
//      db.collection("lists").findAll({}, function(err, result){
//          if(err) throw err;
//          console.log(result.title);
//          res.send(result);
//          db.close();
//      })
//  })
// });

module.exports = router;