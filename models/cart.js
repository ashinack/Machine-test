const mongoose = require('mongoose');


const cart= new mongoose.Schema({
    price: {
        type:Number,
        // required: true
    },
   
    productname:{
         type:String
    },
    discount: {
        type: Number,
        default:2
        
    },
    shippingCharge: {
        type: Number,
        default: 100
    },
    multifiles : {
        type:Array

    },
    
   

})


const Cart = new mongoose.model("Cart", cart);



module.exports = (Cart);