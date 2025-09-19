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
