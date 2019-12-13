var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var addressschema=new Schema({
    name:'string',
    address:'string'
});
module.exports=mongoose.model('Address',addressschema)