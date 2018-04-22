var express= require('express');
var path  = require('path');
var bodyParser =  require('body-parser');

var mongoose=require('mongoose');
var cors=require('cors');

var index= require('./routes/index');
var tasks= require('./routes/tasks');

var port= 3000;

var app= express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


mongoose.connect('mongodb://localhost:27017/lists', {useMongoClient:true});

//on connection w mongodb
mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in database connection:'+err);
    }
});

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port' + port);
});