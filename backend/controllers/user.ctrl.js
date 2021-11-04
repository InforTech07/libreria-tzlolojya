const {request,response}= require('express');
const User = require('../models/user.js');

const newUser= async (req=request,res=response)=>{
    const {username,password}=req.body;
    const user = new User({username,password});
    user.password = await user.encryptPassword(password);
    console.log(user);
    await user.save();
    res.json({msg:"usuario creado"})
}


const signIn = async(req=request,res=response)=>{
    const user= await User.findOne({username:req.body.username})
     if(!user){
        return res.status(404).json({auth:false,msg:'credenciales no valido'})
    }
    const validPassword= await user.comparePassword(
        req.body.password,
        user.password
    );
    if(!validPassword){
        return res.status(404).json({auth:false,msg:'credenciales no valido'})
    }

    res.status(200).json({auth:true,msg:'bienvenido',user:user.username})
}

module.exports={
    newUser,
    signIn
}