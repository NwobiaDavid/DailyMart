import express, { Request, Response } from 'express'
import asyncHandler from 'express-async-handler';
import { ProductModel } from '../models/productModel';

export const productRouter = express.Router();

productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    res.json(products);
  })
);

productRouter.get(
  '/categories',
  asyncHandler(async (req: Request, res: Response) => {
    const categories = await ProductModel.find().distinct('category')
    res.json(categories)
  })
)

productRouter.get(
  '/slug/:slug',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.findOne({ slug: req.params.slug })
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ message: 'product not found' });
    }
  })
);
