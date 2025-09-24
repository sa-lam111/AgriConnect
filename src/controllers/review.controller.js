import * as reviewService from '../services/review.service.js'

export const createReview=async(req,res)=>{
    const {productId,rating,comment}=req.body;
    const id = req.user.id || req.farmer.id;
    const review=await reviewService.createReview(productId,id,rating,comment);
    if(!review){
        return res.status(400).json({message:"Invalid fields"});
    }
    res.status(200).json(review);
}