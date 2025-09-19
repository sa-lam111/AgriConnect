import * as productService from '../services/product.service.js';

export const createProduct = async (req, res) => {
    const product = await productService.createProduct(req.body);
    if (product) {
        res.status(201).json(product);
    } else {
        res.status(500).json({ message: 'Failed to create product' });
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
