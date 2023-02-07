const mongoose = require("mongoose");

var mongoURl= 'mongodb+srv://atom:9TArDHIKrVqOkKqy@atlascluster.cmm9mih.mongodb.net/foodety'

mongoose.connect(mongoURl , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log('Mongo DB Connection Failed');
})

module.exports =mongoose