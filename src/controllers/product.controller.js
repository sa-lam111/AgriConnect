import * as productService from '../services/product.service.js';

export const createProduct = async (req, res) => {
        const { name, description, price, quantity, category, imageUrl } = req.body;
        const seller=req.farmer.id;
        const product = await productService.createProduct({ name, description, price, quantity, seller, imageUrl });
        if(!product){
             res.status(500).json({ message: 'Failed to create product'});
    }
        
        res.status(201).json(product);     
}

export const getProducts = async (req, res) => {
        const products = await productService.getProducts();
        if(!products){
            return res.status(400).json({message:"No product found"})
        }
        res.status(200).json(products);
    }
export const getProductsByFarmerId=async(req,res)=>{
    const {farmerId}=req.body;
    const product=await productService.getProductsByFarmerId(farmerId);
    if(!product){
        return res.status(400).json({message:"This farmer doesnt have any product"});
    }
    res.status(200).json(product);
}

export const getProductsForFarmer=async(req,res)=>{
    const farmerId=req.farmer.id;
    const product=await productService.getProductsForFarmer(farmerId);
    if(!product){
        return res.status(400).json({message:"This farmer doesnt have any product"});
    }
    res.status(200).json(product);
}

export const editProduct=async(req,res)=>{
    const { productId,description,price,quantity }=req.body;
    const farmerId=req.farmer.id;
    const product=await productService.editProduct(productId,description,price,quantity,farmerId);
    if(product==="error1"){
        return res.status(404).json({message:"Product Not found"});
    }
    if(!product){
        return res.status(401).json({message:"Update unsuccesful"});
    }
    res.status(200).json({message:"All edit successful "});
}
export const deleteProduct=async(req,res)=>{
    const {productId}=req.params;
    const deleteProduct=await productService.deleteProduct(productId);
    if(deleteProduct==="error1"){
        return res.status(404).json({message:"Product Not found"});
    }
    if(!deleteProduct){
        return res.status(401).json({message:"Delete unsuccesful"});
    }
    res.status(200).json({message:"Delete successful"});
}