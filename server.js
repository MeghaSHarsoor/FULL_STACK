const express=require('express')
const mongoose=require('mongoose')
const cors=require("cors")
require('dotenv').config()

const User=require('./models/User');
const Product=require('./models/Product');
const Vendor=require('./models/Vendor');
const bcrypt=require('bcryptjs');

const PORT=5001
const app=express()
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("MongoDB Atlas  connected successfully");
    app.listen(PORT,()=>{
        console.log(`Backend running at http://localhost:${PORT}`);
    });
})
.catch(
    (err)=>{
        console.log("MongoDB Atlas connection error:",err);
});
app.get('/',async(req, res)=>{
    try{
        res.send("<h1 align=center>Welcome to the Backend</h1>")
        res.send("<h2 align=center>database handling</h2>")
    }
    catch(err)
    {
        console.log(err)
    }
})

app.post('/register',async(req,res)=>{
    
    try{
        const {yourname,email,password}=req.body;
        const existingUser=await
        User.findOne({email});
        if(existingUser){
            return
            res.status(409).json({message:"User already exists"});

        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

         const newUser=new User({yourname,email,password:hashPassword})
         await newUser.save();
         res.status(201).json({message:"User registered successfully"});
         }
    catch(err)
    {
        console.error("registeration error",err);
        res.status(500).json({message:"Server error",error:err.message});
    }
});
app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await User.findOne({email});
        if(!user){
            return
            res.status(401).json({message:"User not found" });
        }
        if(User.password!==password){
            return
            res.status(401).json({message:"incorrect password"});
        }
        const role=User.role||"User";
        res.status(200).json({
            message:"Login Successful",
            role,
            user:{
                username:user.username,
                email:user.email,
            },
        });
     } catch(err)
   {
    console.log("Login error:",err);
    res.status(500).json({message:"Server error",error:err.message});
   }
});

app.post('/product',async(req,res)=>{
    const{productName,price,category,description}=req.body;
    try{
        const newProduct=new Product({productName,price,category,description});
        await newProduct.save();
        console.log("Product added successfully");
        res.status(201).json({message:"product added",product:newProduct});

    }
    catch(err)
    {
        console.err(err)
    }
});

app.post('/vendor',async(req,res)=>{
    const{username,email,password}=req.body;
    try{
        const newVendor=new Vendor({username,email,password});
        await newVendor.save();
        console.log("Vendor added successfully");
        res.status(201).json({message:"vendor added",vendor:newVendor});

    }
    catch(err)
    {
        console.err(err)
    }
});


app.listen(PORT,(err)=>{
    if(err){
         console.log(err)
    }
    console.log("Server is running on port|This is Megha:"+PORT)
})