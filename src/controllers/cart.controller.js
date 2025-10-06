import * as cartServices from '../services/cart.service.js';

export const addToCart=async(req,res)=>{
    const userId=req.user.id;
    const{productId,quantity}=req.body;
    const carted=await cartServices.addToCart(userId,productId,quantity);
    res.status(200).json(carted);
}

export const getCart=async(req,res)=>{
    const userId=req.user.id;
    const cart=await cartServices.getCart(userId);
    res.status(200).json(cart);
}