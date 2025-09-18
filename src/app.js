import express from 'express';
import setupMiddlewares from './middleware/main.js';
import authRoutes from './routes/auth.route.js';
const app = express();
setupMiddlewares(app);
app.use('/api/auth',authRoutes);

app.get('/', (req,res)=>{
    res.json({
        message:"Agriconnect online"
    });
});

export default app;