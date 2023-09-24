const mongoose=require('mongoose')
const userface=new mongoose.Schema({
      name:String,
      age:Number
})
module.exports= mongoose.model('User',userface)