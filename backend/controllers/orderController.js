
const { Cart } = require('../model/cartModel')
const { Product } = require('../model/productModel')
const { User } = require('../model/userModel')
const { Order } = require('../model/orderModel')
const orderController = {
    addOrder: async (req, res) => {
        try {
            const cart = req.body.cart
            const userId = req.body.userId
            const shippingInfor = req.body.shippingInfor
            const totalPrice = req.body.totalPrice

            let user = User.findOne({ userId: userId })
            if (!user) {
                res.json({ "status": 500, "message": "user not found" })
            }
            else {
                const orderData = {
                    userId: userId,
                    cart: cart,
                    shippingInfor: shippingInfor,
                    totalPrice: totalPrice
                }

                let order = new Order(orderData)
                let orderSave = await order.save();

                if (orderSave) {
                    res.json({ "status": 200, "order": orderSave })
                }
            }
        }
        catch (err) {
            res.json({ "status": 500, "errr": err })
        }

    },
    getAll: async (req, res) => {
        try {
            const orders = await Order.find().sort({ createdAt: -1 });
            if (orders) {
                res.json({
                    status: 200,
                    data: orders,
                })
            }
        }
        catch (err) {
            if (err) {
                res.json({
                    status: 500,
                    erorrs: err,
                })
            }
        }
    },

    getById: async (req, res) => {
        try {
            let userId = req.params.id;
            let orders = await Order.find({ userId: userId });
            if (orders) {
                res.json({
                    status: 200,
                    data: orders,
                })
            }
        } catch (error) {
            res.json({
                status: 500,
                error: error,
            })
        }
    }
}


module.exports = orderController;