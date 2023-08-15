import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { productRouter } from './routers/productRouter';
import { seedRouter } from './routers/seedRouter';

dotenv.config();
const app = express();

const MONGODB_URI = process.env.MONGO_URI || 'mongodb:/localhost/ecom'

mongoose.set('strictQuery', true);

mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log('connected to mongodb');
})
.catch(()=>{
    console.log('error occurred during connection');
})

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:5173']
    })
)
const PORT = 3000 || process.env.PORT;

app.use('/api/products', productRouter);
app.use('/api/seed', seedRouter);

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}...`)
})