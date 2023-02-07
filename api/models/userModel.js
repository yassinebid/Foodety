const mongoose = require ("mongoose");
const bcrypt = require ("bcryptjs");

const userSchema = mongoose.Schema({

    name :{type:String , require},
    email :{type: String , require},
    password :{type: String , require},
    isAdmin :{type: Boolean, require , default : false},

} , {
    timestamps:true,

})
const userModel = mongoose.model('orders' , orderSchema)
module.exports = userModel
module.exports = mongoose.model('users' , userSchema)