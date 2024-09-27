const mongoose  = require("mongoose");
 const techniciansShema = mongoose.Schema({


    

    name:{
        type: String ,
        require: true
    },

    category:{
        type: String,
        require : true
    },

    
 },{
    timestamps: true,
 }
)

const techniciansModel = mongoose.model('technicians',techniciansShema)
module.exports = techniciansModel
