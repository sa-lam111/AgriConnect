// <<<<<<< main
// import {Schema,model} from 'mongoose';

// const farmerschema=new Schema({
//         name:{type:String,required:true},
//         email:{type:String, required:true,unique:true},
//         number:{type:String,required:true,unique:true},
//         password:{type:String,required:true},
//         address:{type:String,required:true},
//         createAt:{type:Date,default:Date.now},
//         role:{type:String,default:'farmer'},
//         location:{type:String,enum:['Ilorin','Offa'],default:'Ilorin'},
// })

// const Farmer=model('Farmer',farmerschema);
// export default Farmer;
// =======
// import { Schema, model } from 'mongoose';

// const farmerProfileSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     farmName: { type: String, required: true },
//     farmAddress: { type: String, required: true },
//     contactNumber: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now }
// });

// const FarmerProfile = model('FarmerProfile', farmerProfileSchema);

// export default FarmerProfile;
// >>>>>>> main
