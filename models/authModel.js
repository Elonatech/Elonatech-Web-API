const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
 
    email:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required:true
    }

});

const Auth = new mongoose.model('Auth', authSchema);

module.exports = Auth;