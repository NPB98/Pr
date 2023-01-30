const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    })
  })
  .catch((err)=>console.log(err))
};


exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then((product)=>{
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
  })
})
  .catch((err)=>console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then(products=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    })
  })
  .catch((err)=>console.log(err))
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll().then(([rows,fieldData]) => {
      const cartProducts = [];
      for (product of rows) {
        const cartProductData = fieldData;
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId).then(([rows,fieldData])=>{
    Cart.addProduct(prodId, product.price);
  })
  .catch((err)=>console.log(err));
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId).then(([rows,fieldData])=>{
    Cart.deleteProduct(prodId, fieldData[0].price);
    res.redirect('/cart');
  }) 
  .catch((err)=>console.log(err));
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
