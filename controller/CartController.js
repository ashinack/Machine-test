const Cart = require('../models/cart')



const getDetails = async (req, res) => {
    try {
        const data = await Cart.find().lean()



        let total = await Cart.aggregate([{ $project: { price: 1, shippingCharge: 1, discount: 1, subtotal: { $sum: ["$shippingCharge", { $divide: [{ $multiply: ["$price", { $subtract: [100, "$discount"] }] }, 100] }] } } }])
        console.log(total);
        // let totala = total.length ? total[0].subtotal : 0
        // console.log(totala);

        res.render('main/main', { data, total })
        // res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getDetails }



