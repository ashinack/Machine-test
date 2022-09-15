const Cart = require('../models/cart')
const multer = require('multer')
// const fs=require('fs')

// multer storage
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {

        cb(null, Date.now() + '--' + file.originalname)
    }
})

// multer upload
var upload = multer({
    storage: storage

})



const addToCart = async (req, res) => {

    const { price, productname } = req.body
    // console.log(req.files);
    let arr = req.files.map((a) => {
        return { filename: a.filename }
    })
    console.log(arr, "arr");
    try {
        // res.send(files )
        const product = await Cart.create({
            price,
            productname,
            multifiles: arr
        })

        res.redirect('/')
        // res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)

    }

}

const edit_Product = async (req, res) => {
    const id = req.params.id

    try {
        const getEditdt = await Cart.findOne({ _id: id }).lean()
        console.log('333');
        console.log(getEditdt.multifiles[0]);
        pic = getEditdt.multifiles[0]
        res.render('main/edit', { getEditdt, pic })
    } catch (error) {

    }

}

const editProduct = async (req, res) => {
    const id = req.params.id
    console.log(req.files);
    let arr = req.files.map((a) => {
        return { filename: a.filename }
    })
    try {
        const data = await Cart.update({ _id: id }, {
            $set: {
                price: req.body.price,
                productname: req.body.productname,
                multifiles: arr

            }

        })

        // res.status(200).json(data)
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProduct=async(req,res)=>{
    const id=req.params.id
    try {
        await Cart.deleteOne({_id:id})
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ message: error.message })

    }

}
module.exports = { addToCart, upload, edit_Product, editProduct, deleteProduct }