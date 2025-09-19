import * as productService from '../services/product.service.js';

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, quantity, category, seller, imageUrl } = req.body;
        const product = await productService.createProduct({ name, description, price, quantity, category, seller, imageUrl });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create product', error: error.message });
    }
}

export const getProducts = async (req, res) => {
    const products = await productService.getProducts();
    if (products) {
        res.status(200).json(products);
    } else {
        res.status(500).json({ message: 'Failed to get products' });
    }
}
