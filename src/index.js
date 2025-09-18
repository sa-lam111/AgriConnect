import express from "express";
import {connect} from 'mongoose';
import dotenv from 'dotenv';
import app from "./app.js"
dotenv.config()
console.log(process.env.MONGO_URL);
try{
    const con=await connect("mongodb+srv://olanijunaid_db_user:uuLL6mF9lNcWRA8L@agriconnect-all.rezwzeu.mongodb.net/?retryWrites=true&w=majority&appName=Agriconnect-all");
    console.log(`MongoDB connectd: ${con.connection.host}`)
}
catch(error){
    console.log(error);
    process.exit(1);
}

const PORT=process.env.port || 3001;
app.listen(PORT,()=>{
    console.log(`server currently running on ${PORT}`);
})