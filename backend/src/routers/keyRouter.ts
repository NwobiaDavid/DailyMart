 import express from 'express'

 export const keyRouter = express.Router()

 // /api/keys/paypal
 keyRouter.get('/paypal', (req,res)=>{
    res.json({clientId: process.env.PAYPAL_CLIENT_ID || 'sb'})
 })

  // /api/keys/flutterwave
  keyRouter.get('/paypal', (req,res)=>{
   res.json({clientId: process.env.FLUTTERWAVE_PK || 'sb'})
})