import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();



const app =express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

app.use('/api/auth',authRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})