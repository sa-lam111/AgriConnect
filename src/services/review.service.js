import Review from "../model/review.model.js";

export const createReview = async (productId,id,rating,comment) => {
    try{
        const review = new Review({productId,userId:id,rating,comment});
        await review.save();
        return review;
    }catch(error){
        console.log(error);
        return null;
    }

};

