import * as weather from '../services/weather.service.js';

export const getWeather=async(req,res)=>{
    const {lat,lon}=req.body;
    const weatherData=await weather.getWeather(lat,lon);
   if(!weatherData){
       return res.status(500).json({error:"Failed to get weather data"});
   }
   return res.status(200).json(weatherData);
}