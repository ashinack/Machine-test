var express = require('express');
let router = express.Router();
const { getDetails }=require('../controller/CartController')

router.get('/', getDetails)




module.exports = router;