import express from 'express';
import "dotenv/config"
import cors from "cors";
import database from "./src/config/dbConfig.js"
import authRouter from './src/routes/authRoute.js';
import expoRoute from './src/routes/expoRoute.js';
import boothRoute from './src/routes/boothRoute.js';
import scheduleRoute from './src/routes/scheduleRoute.js';

const app = express()
const allowedOrigin = "http://localhost:5173";
app.use(
  cors({
    origin: allowedOrigin,
  })
);
app.use(express.json())
app.use("/api", authRouter)
app.use("/api/expo", expoRoute)
app.use("/api/booth", boothRoute)
app.use("/api/schedule", scheduleRoute)

const port= process.env.PORT

database()

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
    
})

