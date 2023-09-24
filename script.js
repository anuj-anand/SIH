const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Basic',{
      useNewUrlParser : true,
      useUnifiedTopology:true})
      .then(() =>console.log('connection successfull......')).catch((err)=>console.log(err));

const userSchema=new mongoose.Schema({
      name:
      {
            type:String,
            require:true,
            uppercase:true 
      },
      ctype:String,
      videos:Number,
      author:String,

})
const User=new mongoose.model('User',userSchema);  
// creating document or insert data;
const playlist=new User({
      name:'anuj',ctype:'backend',
      videos:40,
      author:'anand'
})
const getele=async ()=>{
      const result=await playlist.find({ctype:'backend'})
      console.log(result);
}
getele();
// playlist.save();