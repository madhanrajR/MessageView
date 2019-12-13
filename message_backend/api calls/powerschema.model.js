var mongoose=require('mongoose')
var Schema=mongoose.Schema;
var detailsschema=new Schema(
    {
        name: "string",
        username: "string",
        email: "string",
        address: {
          street: "string",
          suite: "string",
          city: "string",
          zipcode: "number",
          geo: {
            lat: "number",
            lng: "number"
          }
        },
        phone: "number",
        website: "string",
        company: {
          name: "string",
          catchPhrase: "string",
          bs: "string"
        }
    }
)
module.exports=mongoose.model('detailsschema',detailsschema)