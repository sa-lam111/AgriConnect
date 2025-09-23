import Product from '../model/product.model.js';

export const createProduct = async (productData) => {
    const product = new Product(productData);
    await product.save();
    return product;
}

export const getProducts = async () => {
    const products = await Product.find();
    return products;
}
