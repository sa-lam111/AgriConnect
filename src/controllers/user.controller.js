import * as userService from '../services/user.service.js'

export const getAllFarmers=async(req,res)=>{
    const getAllFarmers=await userService.getAllFarmers();
    if(!getAllFarmers){
        return res.status(400),json({errorMessage:"No farmer found"})
    }
    res.status(200).json(getAllFarmers);
}
export const getFarmerById=async(req,res)=>{
    const {id}=req.body;
    const getFarmerById=await userService.getFarmerById(id);
     if(!getFarmerById){
        return res.status(400),json({errorMessage:"No farmer found with this id"})
    }
    res.status(200).json(getFarmerById);
}
export const getFarmerByEmail=async(req,res)=>{
    const {email}=req.body;
    const getByEmail=await userService.getFarmerByEmail(email);
    if(!getByEmail){
        return res.status(400),json({errorMessage:"No farmer found with this email"})
    }
    res.status(200).json(getByEmail);
}