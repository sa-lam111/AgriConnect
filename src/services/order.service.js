import Order from '../model/order.model.js';

export const createOrder = async (orderData) => {
    const order = new Order(orderData);
    await order.save();
    return order;
}

export const getOrders = async (userId) => {
    const orders = await Order.find({ user: userId });
    return orders;
}
