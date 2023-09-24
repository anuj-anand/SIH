const express = require("express");
const app = express();
const cors =require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
mongoose
      .connect("mongodb://127.0.0.1:27017/Basic", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
      })
      .then(() => console.log("connection successfull......"))
      .catch((err) => console.log(err));
// making product Schema
const productSchema = new mongoose.Schema({
      nameofproject: String,
      problemstatus: String,
      lighton: Number,
      lightoff:Number
});
// collection
const Product = new mongoose.model("Product", productSchema);
// for writing
app.post("/api/v1/product", async (req, res) => {
      const product = await Product.create(req.body);
      res.status(200).json({ success: true, product });
});



// read product
app.get('/api/v1/products',async(req,res)=>{
      const products=await Product.findOne({
            nameofproject: req.body.name
      });
      res.status(201).json({success:true,products});
})
// for update
app.post('/api/v1/product/:id',async(req,res)=>{
      const query= {_id: req.body.id}
      console.log(query);
      console.log(req.body);
      let product=await Product.findOneAndUpdate(query,req.body,{
            new :true ,runValidators:true,
            useFindAndModify:false
      });
})

// for deletion
app.delete('/api/v1/product/:id',async(req,res)=>{
      const product=await Product.find();
      if(!product)
      {
            return res.status(500).json({
                  success:false,
                  message:'No data found'
            })
      }
      await product.remove();
      res.status(200).json({
            success:true,
            message:"data deleted successfully"
      })

})
app.get("/getData",(req,res)=>{
      res.send("connected")
})
app.listen(port, () => {
      console.log(`${port} yes im connected`);
});
