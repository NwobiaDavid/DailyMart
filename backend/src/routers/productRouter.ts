import express from "express";
import { ProductModel } from "../models/productmodel";
import asyncHandler from "express-async-handler";

export const productRouter = express.Router();

productRouter.get('/', 
asyncHandler(async (req,res)=>{
    const products =await ProductModel.find();
    res.json(products);
}))

productRouter.get('/slug/:slug', 
asyncHandler(async (req,res)=>{
    const product = await ProductModel.find({slug: req.params.slug});
    if(product){
        res.json(product);
    } else {
        res.status(404).json({message: 'product not found'})
    }
    
}))

