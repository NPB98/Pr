const path=require('path');
const fs=require('fs');
const rootDir=require('../util/path');
const Product=require('../models/products');
exports.getAddProduct=((req, res, next) => {
    res.sendFile(path.join(rootDir,'views','product.html'));
 });

 exports.postProduct=((req, res, next) => {
    const product=new Product(req.body.title);
    //console.log(product);
    product.save();
    //console.log(product);
    res.redirect('/');
  });

  exports.showProducts=((req, res, next) => {
    console.log(Product.fetchAll(()=>{
      res.sendFile(path.join(rootDir,'views','shop.html'));
    }));
  });
  