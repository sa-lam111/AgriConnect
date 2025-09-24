import express from 'express';
import setupMiddlewares from './middleware/main.js';
import authRoutes from './routes/auth.route.js';
import productRoutes from './routes/product.route.js';
import orderRoutes from './routes/order.route.js';

import userRoutes from './routes/user.route.js';
import reviewRoutes from './routes/review.route.js'
import notificationRoutes from './routes/notification.route.js';

const app = express();
setupMiddlewares(app);

app.use('/api/auth',authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/user', userRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/notifications', notificationRoutes);

app.get('/', (req,res)=>{
    res.json({
        message:"Agriconnect online"
    });
});

export default app;