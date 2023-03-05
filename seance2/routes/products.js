var express = require('express');
var router = express.Router();
var products=require('../products.json');

router.get('/', function(req, res, next) {
    res.json({
        products:products
    });
  });

router.get('/:id',function (req,res,next){
    res.json({
        products:products[req.params.id]
    })
})


router.get('/instock/:qt',function(req,res,next){
    var a= Object.values(products).filter((e) => e.stock >= req.params.qt)
    res.json({
        object:a
    })
})

router.get('/:id/:qt', function(req,res,next){
    res.json({
        id:req.params.id,
        qt:req.params.qt,
        unite_price:products[req.params.id].price,
        total_price:req.params.qt * products[req.params.id].price
        
    })
})



  module.exports = router;