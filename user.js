const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
userName: {
    type:String,
    require:true,
    null:false
} ,
email:String,
password:String,
isTrash:{
    type:Boolean,
    default:false
}
});

const User = mongoose.model('users' , userSchema);

module.exports = User ;
