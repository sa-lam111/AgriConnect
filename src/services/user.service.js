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
          const farmer=await Farmer.findById(id);
    return farmer;  
    } catch (error) {
        console.log(error);
        return null;
    }

}
export const getFarmerByEmail=async(email)=>{
    try {
         const farmer=await Farmer.findOne(email);
    return farmer
    } catch (error) {
        console.log(error);
        return null;
    }
   
}