const express = require('express');
const PORT = 4007;
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/practice';
const User = require('./user');
const { db } = require('./db');

const { genHash , checkPassword } = require('./helper');


app.use(express.json());

db(url)





app.get('/find' , async(req, res) =>{
    try{
const users = await User.find({isTrash:false});

res.status(201).json({
    message:"Users gotten successfully",
    data:users
  });
    }catch(err){
        res.send(err)
    }
});

app.get('/delete' , async(req, res) =>{
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).json({message: 'User not found'});
        const updateUser = await User.findOneAndUpdate({email:user.email} , { isTrash:true} , { new : true });
        return res.status(200).json({
            message:'User deleted successfully',
            user:updateUser
        })
    }catch(err){
        res.send(err);
    }

});

app.get('/update', async(req, res) =>{
    try{    const userInfo = {
        username:'bola',
        email:'shade@gmail.com'
    }
    
    const spreadObj = {...userInfo, email:'1234'};
  
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).json({message: 'User not found'});
        const updateUser = await User.findOneAndUpdate({email: user.email} , {...req.body} ,{new : true} )
    }catch(err){
        res.send(err)
    }
})

app.get('/create' , async(req , res) =>{
    try{

 req.body.password = await genHash(req.body.password);
       
 const user = await User.create(req.body);
  res.status(201).json({
    message:"User created successfully",
    data:user
  });
    }catch(err){
        console.log(err)
        res.status(400).send('Error in creating user')
    }
 });


 app.post('/login' , async(req, res) =>{
    try{
    const findUser = await User.findOne({email: req.body.email});
    if(!findUser) return res.status(400).json({
        message:'Invalid Username or Password'
    });
    const check = await checkPassword(req.body.password , findUser.password);
    if(!check)  return res.status(400).json({
        message:'Invalid Username or Password'
    });
    return res.status(200).json({
        message:'Login successful'
    })
    }catch(err){

    }
})








app.listen(PORT , () =>{
    console.log(`Server is listening to ${PORT}`);
})
