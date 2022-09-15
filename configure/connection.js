const mongoose = require('mongoose');
// const dotenv = require('dotenv')

// dotenv.config()

mongoose.connect("mongodb://127.0.0.1:27017/ShoppingCart", {
    useNewUrlParser: true
}).then(() => {
    console.log('connection successfull');
}).catch((e) => {
    console.log('no connection');
})