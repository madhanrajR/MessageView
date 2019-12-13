var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app= express();
var cors=require ("cors")

let Address=require('./address.model')
let detailsschema=require('./powerschema.model')

//var url = "mongodb://localhost:27017/maddy";
var url ="mongodb+srv://test:test@cluster0-h7tsx.mongodb.net/"
var DBname = "mydb"

mongoose.connection.on('connected', function() {
    console.log('Connection to Mongo established.');
    // Hack the database back to the right one, because when using mongodb+srv as protocol.
    if (mongoose.connection.client.s.url.startsWith('mongodb+srv')) {
        mongoose.connection.db = mongoose.connection.client.db(DBname);
    }
});

mongoose.connect(url, {dbName: DBname}, function(err, client) {
  if (err) {
     console.log("mongo error", err);
     return;
  }
});

// mongoose.connect(url);
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({
    extended:false
}));


app.get('/',(req,res)=>{
    res.send("hello world");
})

app.post('/detailsadd',(req,res)=>{
    var newdetails = new detailsschema(req.body);
    
    // newaddress.name = req.body.name;
    // newaddress.address = req.body.address;
    

    newdetails.save((err,address) => {
        if(err)  {
            res.send(err);
        }else {
            console.log(address);
            res.send(address);
        }
    });
});

app.post('/add',(req,res)=>{
    var newaddress = new Address(req.body);
    
    // newaddress.name = req.body.name;
    // newaddress.address = req.body.address;
    

    newaddress.save((err,address) => {
        if(err)  {
            res.send(err);
        }else {
            console.log(address);
            res.send(address);
        }
    });
});

app.get('/getAll',(req,res)=>{
    console.log();
    
    Address.find((err,address)=>{
        console.log(address);
        
        if(err){
        console.log(err);
        res.send(err);}
        else{
            res.send(address);
        }
    })
})
// app.get('/edit',(req,res)=>{
//     console.log();
//     // let id = req.params.id;
//     let id=req.body._id;
//     Address.findById(id,(err,address)=>{
//         res.json(address);
//     })
// })

app.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    console.log(id);
    Address.findById(id,(err,address)=>{
        console.log(address);
        
        if(err){
        console.log(err);
        res.send(err);}
        else{
            res.send(address);
        }
    })
})
app.post('/update',(req,res)=>{
   
    uesrid=req.body._id;
    name=req.body.name;
    add=req.body.address;

    Address.findByIdAndUpdate(uesrid, {$set :{name:name,address : add}},(err,name)=>{
        console.log(name);
        
        if(err){
        console.log(err);
        res.send(err);
            res.end();
    }
        else{
            res.send(name);
            res.end();
        }
    })
})
app.post('/updateone',(req,res)=>{
   
    add1=req.body.address1;
    add=req.body.address;

    Address.updateOne({address:add1}, {$set : {address : add}},(err,name)=>{
        console.log(name);
        
        if(err){
        console.log(err);
        res.send(err);
            res.end();
    }
        else{
            res.send(name);
            res.end();
        }
    })
})
app.post('/updatemany',(req,res)=>{
   
    add1=req.body.address1;
    add=req.body.address;

    Address.updateMany({address:add1}, {$set : {address : add}},(err,name)=>{
        console.log(name);
        
        if(err){
        console.log(err);
        res.send(err);
            res.end();
    }
        else{
            res.send(name);
            res.end();
        }
    })
})
app.post('/delete',(req,res)=>{
   
    add1=req.body._id;
   // add=req.body.address;

    Address.findByIdAndDelete(add1,(err,name)=>{
        console.log(name);
        
        if(err){
        console.log(err);
        res.send(err);
            res.end();
    }
        else{
            res.send(name);
            res.end();
        }
    })
})

// app.post('/insertmany',(req,res)=>{
//    // var newaddress = new Address();
//     Address.insertMany(req.body,+(err,address) => {
//         if(err)  {
//             res.send(err);
//         }else {
//             console.log(address);
//             res.send(address);
//         }
//     });
// });

app.listen(3000,()=>{
    console.log("connected");
    
})
