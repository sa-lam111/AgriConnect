import request from 'supertest';
import app from '../src/app.js';
import mongoose from 'mongoose';
import User from '../src/model/user.model.js';
import Product from '../src/model/product.model.js';
import Order from '../src/model/order.model.js';
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv();

describe('/api/orders', () => {
    let token;
    let userId;
    let productId;

    beforeAll(async () => {
        const url = process.env.MONGO_URL.replace('/?retryWrites=true&w=majority&appName=Agriconnect-all', '/agriconnect-test?retryWrites=true&w=majority&appName=Agriconnect-all');
        await mongoose.connect(url, { useNewUrlParser: true });

        const user = new User({ name: 'Ade', email: 'abdulsalamopeyemi064@gmail.com', password: '23456', number: '0987654321', address: 'ilorin' });
        await user.save();
        userId = user._id;

        token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const product = new Product({ name: 'Test Product', description: 'A Product', price: 10, quantity: 100, category: 'Food', seller: userId });
        await product.save();
        productId = product._id;
    });

    afterAll(async () => {
        await User.deleteMany({});
        await Product.deleteMany({});
        await Order.deleteMany({});
        await mongoose.connection.close();
    });

    it('should create a new order', async () => {
        const res = await request(app)
            .post('/api/orders')
            .set('Authorization', `Bearer ${token}`)
            .send({
                products: [
                    {
                        product: productId,
                        quantity: 2
                    }
                ],
                totalAmount: 20,
                shippingAddress: '123 Test St'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.totalAmount).toEqual(20);
    });

    it('should get all orders for a user', async () => {
        const res = await request(app)
            .get('/api/orders')
            .set('Authorization', `Bearer ${token}`);
        
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
