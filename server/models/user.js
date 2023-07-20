const mongoose = require("mongoose");

const newSchema=new mongoose.Schema({
    firstname:{
      type: String,
      required:true
    },
    lastname:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    phonenumber:{
      type:String,
      required:true
    },
    confirmationCode:{
      type:String,
      required:false
    }
  })
  
  const collection = mongoose.model("collection",newSchema)
  
  module.exports=collection
  