import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { productRouter } from './routers/productRouter';
import { seedRouter } from './routers/seedRouter';
import { userRouter } from './routers/userRouter';
import { orderRouter } from './routers/orderRouter';
import { keyRouter } from './routers/keyRouter';

dotenv.config();
const app = express();

const MONGODB_URI = process.env.MONGO_URI || 'mongodb:/localhost/ecom'

mongoose.set('strictQuery', true);

mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log('connected to mongodb 💥');
})
.catch(()=>{
    console.log('error occurred during connection');
})

app.use(
    cors({
        credentials: true,
        origin: true
    })
)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 3000 || process.env.PORT;

app.use('/api/products', productRouter);
app.use('/api/seed', seedRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/keys', keyRouter);

//production path
app.use(express.static(path.join(__dirname, '../../frontend/dist')))
app.get('*', (req:Request, res:Response)=>
res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
)

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}...`)
})