var express = require('express')
var app= express();
var mongooes=require('mongoose')
var bodyParser = require('body-parser');
// var mongo = require('mongodb');
// var MongoClient=require('mongodb').MongoClient
let address=require('./address.model')
var url = "mongodb+srv://test:test@cluster0-h7tsx.mongodb.net/admin";

mongooes.connect(url);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
    extended:false
}));
app.get('/api',(req,res)=>{
    res.send('api is working');
})
app.post('/add',(req,res)=>{
    var newaddress = new address();
    
    newaddress.name = req.body.name;
    newaddress.address = req.body.address;
    

    newaddress.save((err,address) => {
        if(err)  {
            res.send('error saving address');
        }else {
            console.log(address);
            res.send(address);
        }
    });
});

app.listen(8081,function(){
    console.log('server is connected');
    
})

