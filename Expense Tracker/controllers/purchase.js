const Razorpay=require('razorpay');
const Order = require('../models/order');

const purchasePremium=(req,res)=>{
    try{
        var rzp= new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        })
        const amount=2500;

        rzp.order.create({amount, currency:"INR"},(err,order)=>{
            if(err){
                throw new Error(JSON.stringify(err))
            }
            req.user.createOrder({ orderID:order.id, status:'PENDING'})
            .then(()=>{
                return res.status(201).json({order,key_id:rzp.key_id});
            })
            .catch((err)=>{
                throw new Error(err);
            })
        })
    }
    catch(err){
        res.status(403).json({message:'Something went wrong',err:err});
    }
}

const updateTransactionStatus=async (req,res)=>{
    try{
        const payment_id=req.body.payment_id;
        const order_id=req.body.order_id;
        const order=await Order.findOne({where:{orderid:order_id}})
            const promise1=order.update({paymentid:payment_id,status:'SUCCESSFUL'})
            const promise2=req.user.update({ispremiumuser:true})
            Promise.all([promise1,promise2]).then(()=>{
                return res.status(202).json({success:true,message:'Transcation Successful'});
            }).catch((err)=>{
                throw new Error(err);
            })       
        }
        catch(err){
            res.status(401).json({error:err,message:'Something went wrong'});
        }
}
module.exports={
    purchasePremium,
    updateTransactionStatus
};