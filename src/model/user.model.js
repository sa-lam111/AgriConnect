import {Schema,model} from 'mongoose';

const userschema=new Schema({
        name:{type:String,required:true},
        email:{type:String, required:true,unique:true},
        number:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        address:{type:String,required:true},
        createAt:{type:Date,default:Date.now},
          cart:[
                {
                product:{
                type:Schema.Types.ObjectId,
                ref:'Product',
                },
                quantity:{
                type:Number,
                default:1
                }
                }
              ],
})
const User=model('User',userschema);

export default User;