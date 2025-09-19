import express from "express";
import {connect} from 'mongoose';
import {configDotenv} from 'dotenv';
import app from "./app.js"
configDotenv()
// console.log(process.env.MONGO_URL);
try{
    const con=await connect(process.env.MONGO_URL);
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