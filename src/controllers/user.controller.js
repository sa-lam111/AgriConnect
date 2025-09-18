import * as authentication from '../services/auth.service.js';

export const register= async(req,res)=>{
    const {name,email,number,password,address}=req.body;
    const userRegister=await authentication.register(name,email,number,password,address);
    if(userRegister==="error1"){
       return res.status(402).json({message:"email already exist"});
    }
    return res.status(201).json(userRegister);
}