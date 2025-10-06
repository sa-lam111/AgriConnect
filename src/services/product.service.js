import Product from '../model/product.model.js';

export const createProduct = async (productData) => {
    try {
    const product = new Product(productData);
    await product.save();
    return product;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const getProducts = async () => {
    try {
         const products = await Product.find();
    return products;
    } catch (error) {
        console.log(error);
        return null;
    }
   
}

export const getProductsForFarmer=async(farmerId)=>{
    try {
        const products=await Product.find({seller:farmerId});
        return products;
    } catch (error) {
        console.log(error);
        return null;
    }

}

export const getProductsByFarmerId=async(farmerId)=>{
    try {
        const products=await Product.find({seller:farmerId});
        return products;
    } catch (error) {
        console.log(error);
        return null;
    }

}
export const deleteProduct=async(productId)=>{
    try {
        const deleted=await Product.findByIdAndDelete(productId);
        if(!deleted){
            return ("error1");
        }
        return deleted;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const editProduct=async(productId,description,price,quantity,farmerId)=>{
    try {
        const product=await Product.findById(productId);
        if(!product){
            return ("error1");
        }
        if(description===""){
            description=product.description;
        }
        if(price===""){
            price=product.price;
        }
        if(quantity===""){
            quantity=product.quantity;
        }
        if(farmerId!==product.seller.toString()){
            return null;
        }
        const update=await Product.findByIdAndUpdate(productId,{description,price,quantity});
        return update;
    } catch (error) {
        console.log(error);
        return null;
    }
}