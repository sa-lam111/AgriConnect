import * as orderService from '../services/order.service.js';

export const createOrder = async (req, res) => {
    try {
        const orderData = { ...req.body, user: req.user._id };
        const order = await orderService.createOrder(orderData);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create order', error: error.message });
    }
}

export const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders(req.user._id);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get orders', error: error.message });
    }
}
