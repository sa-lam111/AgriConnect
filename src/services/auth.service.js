import User from '../model/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendWelcomeEmail } from './mail.service.js';

export const register=async(name,email,number,password,address)=>{
    const emailAddress=await User.findOne({email});
    if(emailAddress){
        return ("error1");
    }
    const numberExists = await User.findOne({ number });
    if (numberExists) {
        return ("error2");
    }
    else{
        try{
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(password,salt);
            const user=new User({
                name,email,number,password:hashedPassword,address
            })
             await user.save();
             await sendWelcomeEmail(email, name);
             return user;
        }catch(error){
            console.log(error);
            return error;
        }
    }
}

export const login = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return { error: 'Invalid credentials' };
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return { error: 'Invalid credentials' };
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        return { token, user };
    } catch (error) {
        console.log(error);
        return { error: 'An error occurred' };
    }
};