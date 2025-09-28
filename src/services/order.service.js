import Order from '../model/order.model.js';
import Cart from '../model/cart.model.js    ';
import User from '../model/user.model.js';
import axios from "axios";
export const checkout=async(userId,paymentMethod)=>{
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    if (!cart || cart.items.length === 0) {
        throw new Error('Cart is empty');
    }
    const totalAmount = cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    if(paymentMethod === 'paystack'){
        const params = {
            email: (await User.findById(userId)).email,
            amount: totalAmount * 100, // Amount in kobo
            metadata: {
                userId: userId,
                cartId: cart._id
            }
        };
      const {data}=await axios.post('https://api.paystack.co/transaction/initialize', params, {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        const order = new Order({
            user: userId,
            items: cart.items,
            total: totalAmount,
            payment: {
                method: 'Paystack',
                refrence: data.data.reference,
            },
        });
        await order.save();
        return {authorization_url:data.data.authorization_url};
    }else{
        const order=await createOrder(userId,paymentMethod);
        return order;
    }
}


export const getOrders = async (userId) => {
    const orders = await Order.find({ user: userId });
    return orders;
}
