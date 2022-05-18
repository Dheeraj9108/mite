const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    username : {type : String , required:true},
    number : {type : String , required:true},
    email : {type : String , required : true},
    msg : {type :String , required : true}
},
{
    collection:'admission'
})
const model  = mongoose.model('admissionSchema',admissionSchema)
module.exports = model