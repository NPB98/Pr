// const express=require('express');
// const router=express.Router();

// router.get('/',(req,res,next)=>{
//     res.send('<h1>Hello from Express.js!</h1>');
// })

// module.exports=router;
const express = require('express');
const path=require('path');
const router = express.Router();
const rootDir=require('../util/path');
router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','shop.html'));
});
router.get('/contactus', (req, res, next) => {
  //console.log('contact');
  res.sendFile(path.join(rootDir,'views','contact.html'));
});

router.post('/success',(req,res,next)=>{
  res.send('<h3>Form successfully filled</h3>')
})

module.exports = router;