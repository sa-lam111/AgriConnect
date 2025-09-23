import Farmer from "../model/Farmerprofile.model.js";

export const getAllFarmers=async()=>{
    try {
        const allFarmers=await Farmer.find().select("name email number address location");
    return allFarmers;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getFarmerById=async(id)=>{
    try {
          const farmer=await Farmer.findById(id).select("name email number address location");
    return farmer;  
    } catch (error) {
        console.log(error);
        return null;
    }

}
export const getFarmerByEmail=async(email)=>{
    try {
         const farmer=await Farmer.findOne({email}).select("name email number address location");
    return farmer;
    } catch (error) {
        console.log(error);
        return null;
    }
   
}