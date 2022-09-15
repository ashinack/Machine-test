var express = require('express');
let router = express.Router();
const { addToCart, upload, edit_Product, editProduct } = require('../controller/ProductController')





router.get('/add',(req,res)=>{
    res.render('main/Addproduct')
})

router.post('/add-to-cart', upload.array('multifiles'), addToCart)

router.get('/edit-product/:id', edit_Product)

router.post('/editProduct/:id', upload.array('multifiles'),editProduct)



module.exports=router;