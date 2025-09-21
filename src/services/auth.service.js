import User from '../model/user.model.js';
import Farmer from '../model/Farmerprofile.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// user register and login
export const userRegister=async(name,email,number,password,address)=>{
    const emailAddress=await User.findOne({email});
    if(emailAddress){
        return ("error1");
    }
    else{
        try{
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(password,salt);
            const user=new User({
                name,email,number,password:hashedPassword,address
            }) 
             await user.save();
             return user;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}
export const userLogin=async(email,password)=>{
    const user=await User.findOne({email:email});
    if(!email){
        return ("error1");
    }else{
        try{
            const isMatch=await bcrypt.compare(password,user.password);
            if(!isMatch){
                return ("error2");
            }
            const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{
            expiresIn:"1h",
        })
        return {token,user};
        }catch(error){
            console.log(error);
            return null;
        }
    }
}
// former register and login
export const farmerRegister=async(name,email,number,password,address)=>{
    const emailAddress=await Farmer.findOne({email});
    if(emailAddress){
        return ("error1");
    }
    else{
        try{
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(password,salt);
            const farmer=new Farmer({
                name,email,number,password:hashedPassword,address
            }) 
             await farmer.save();
             return farmer;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}
export const farmerLogin=async(email,password)=>{
    const farmer=await Farmer.findOne({email:email});
    if(!email){
        return ("error1");
    }else{
        try{
            const isMatch=await bcrypt.compare(password,farmer.password);
            if(!isMatch){
                return ("error2");
            }
            const token = jwt.sign({id:farmer._id,role:farmer.role},process.env.JWT_SECRET,{
            expiresIn:"1h",
        })
        return {token,farmer};
        }catch(error){
            console.log(error);
            return null;
        }
    }
}