import Cart from '../model/cart.model.js';
import Product from '../model/product.model.js';

export const addToCart=async(userId,productId,quantity)=>{
    let cart=await Cart.findOne({user:userId});
    if(!cart){
        cart=new Cart({user:userId,items:[]});
    }
    const product=await Product.findById(productId);
    if(!product){
        throw new Error("Product not found");
    }
    const itemIndex=cart.items.findIndex(item=>item.product.toString()===productId);
    if(itemIndex>-1){
        cart.items[itemIndex].quantity+=quantity;
    }else{
        cart.items.push({product:productId,quantity});
    }
    await cart.save();
    return cart;
}


export const getCart=async(userId)=>{
    const cart=await Cart.findOne({user:userId}).populate('items.product');
    return cart;
}