import * as orderService from '../services/order.service.js';

export const createOrder = async (req, res) => {
    const orderData = { ...req.body, user: req.user._id };
    const order = await orderService.createOrder(orderData);
    if (order) {
        res.status(201).json(order);
    } else {
        res.status(500).json({ message: 'Failed to create order' });
    }
}

export const getOrders = async (req, res) => {
    const orders = await orderService.getOrders(req.user._id);
    if (orders) {
        res.status(200).json(orders);
    } else {
        res.status(500).json({ message: 'Failed to get orders' });
    }
}
