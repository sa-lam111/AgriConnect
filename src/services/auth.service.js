import User from '../model/user.model.js';
import bcrypt from 'bcrypt';
export const register=async(name,email,number,password,address)=>{
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