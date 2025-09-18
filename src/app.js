import express from 'express';


const app = express();

app.get('/', (req,res)=>{
    res.json({
        message:"Agriconnect online"
    });
});

export default app;