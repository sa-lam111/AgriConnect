import * as authentication from '../services/auth.service.js';

export const userRegister = async (req, res) => {
    const { name, email, number, password, address } = req.body;
    const userRegister = await authentication.userRegister(name, email, number, password, address);
    if (userRegister === "error1") {
        return res.status(402).json({ message: "email already exist" });
    }
    if(!userRegister){
        return res.status(400).json({message:"invalid credentials"});
    }
    return res.status(201).json(userRegister);
}
export const userLogin = async (req,res)=>{
    const {email,password}=req.body;
    const userLogin=await authentication.userLogin(email,password);
    if(userLogin==="error1"){
        return res.status(409).json({message:"Email not found please register"});
    }
    if(userLogin==="error2"){
        return res.status(409).json({message:"Password incorrect"});
    }
    res.status(200).json(userLogin);
}
// fArmer signup and login
export const farmerRegister = async (req, res) => {
    const { name, email, number, password, address } = req.body;
    const farmerRegister = await authentication.farmerRegister(name, email, number, password, address);
    if (farmerRegister === "error1") {
        return res.status(402).json({ message: "email already exist" });
    }
    if (!farmerRegister) {
        return res.status(400).json({ message: "invalid credentials" });
    }
    return res.status(201).json(farmerRegister);
}
export const farmerLogin = async (req,res)=>{
    const {email,password}=req.body;
    const farmerLogin=await authentication.farmerLogin(email,password);
    if(farmerLogin==="error1"){
        return res.status(409).json({message:"Email not found please register"});
    }
    if(farmerLogin==="error2"){
        return res.status(409).json({message:"Password incorrect"});
    }
    res.status(200).json(farmerLogin);
}