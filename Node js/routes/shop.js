// const express=require('express');
// const router=express.Router();

// router.get('/',(req,res,next)=>{
//     res.send('<h1>Hello from Express.js!</h1>');
// })

// module.exports=router;

const express = require('express');
//const path=require('path');
const router = express.Router();
//const rootDir=require('../util/path');
const products=require('../controller/product');
const contactHistory=require('../controller/contactDetails');
router.get('/', products.showProducts);
router.get('/contactus', contactHistory.contactDetails);
router.post('/success',contactHistory.successForm);

module.exports = router;

// const path = require('path');

// const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   const products = adminData.products;
//   res.render('shop', {
//     prods: products,
//     pageTitle: 'Shop',
//     path: '/',
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true
//   });
// });

// module.exports = router;
