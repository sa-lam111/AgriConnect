import { configDotenv } from "dotenv";

configDotenv();

export const getWeather= async(lat,lon)=>{
    try {
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}