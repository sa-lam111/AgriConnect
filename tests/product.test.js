import request from 'supertest';
import app from '../src/app.js';
import mongoose from 'mongoose';
import User from '../src/model/user.model.js';
import Product from '../src/model/product.model.js';
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv();

describe('/api/products', () => {
    let token;
    let userId;

    beforeAll(async () => {
        console.log('Connecting to database...');
        const url = process.env.MONGO_URL.replace('/?retryWrites=true&w=majority&appName=Agriconnect-all', '/agriconnect-test?retryWrites=true&w=majority&appName=Agriconnect-all');
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log('Database connected. Connection state:', mongoose.connection.readyState);

        // Create a user and get a token
        const user = new User({ name: 'Test User', email: 'test@gmail.com', password: 'password123', number: '1234567890', address: '123 Test St' });
        await user.save();
        userId = user._id;

        token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    });

    afterAll(async () => {
        console.log('Cleaning up database...');
        await User.deleteMany({});
        await Product.deleteMany({});
        await mongoose.connection.close();
        console.log('Database connection closed. Connection state:', mongoose.connection.readyState);
    });

    it('should get all products', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should create a new product', async () => {
        const res = await request(app)
            .post('/api/products')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Test Product',
                description: 'Test Description',
                price: 100,
                quantity: 10,
                category: 'Test Category',
                seller: userId
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual('Test Product');
    });
});