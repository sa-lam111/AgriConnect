import Order from '../model/order.model.js';

export const createOrder = async (orderData) => {
    try {
        const order = new Order(orderData);
        await order.save();
        return order;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getOrders = async (userId) => {
    try {
        const orders = await Order.find({ user: userId });
        return orders;
    } catch (error) {
        console.log(error);
        return null;
    }
}
