import * as productService from '../services/product.service.js';

export const createProduct = async (req, res) => {
        const { name, description, price, quantity, category, imageUrl } = req.body;
        const seller=req.farmer.id;
        const product = await productService.createProduct({ name, description, price, quantity, category, seller, imageUrl });
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
