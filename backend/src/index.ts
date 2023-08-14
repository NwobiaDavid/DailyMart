import cors from 'cors';
import express, { Request, Response } from 'express'; 
import { sampleProducts } from './data';

const app = express();
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:5173']
    })
)
const PORT = 3000 || process.env.PORT;

app.get('/api/products', (req: Request, res:Response)=>{
    res.json(sampleProducts);
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}...`)
})