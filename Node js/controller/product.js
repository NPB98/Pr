const path=require('path');
const rootDir=require('../util/path');
exports.getAddProduct=((req, res, next) => {
    res.sendFile(path.join(rootDir,'views','product.html'));
 });

 exports.postProduct=((req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

  exports.showProducts=((req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
  });