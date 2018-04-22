//list schema

const mongoose= require('mongoose');
const ListSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    isTrue:{
        type:Boolean,
        required:true
    }
});

const List=module.exports= mongoose.model('List',ListSchema);