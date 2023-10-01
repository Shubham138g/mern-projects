import express from 'express';
const router = express.Router();
import Order from '../models/Orders.js';

router.post("/orderData", async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { order_date: req.body.order_date })

    let eID = await Order.findOne({ "email": req.body.email })
    console.log(eID);

    if (eID === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message);
            // console.log("error in inserting order");
            res.json("server error", error.message)
        }
    }
    else {
        try {
            await Order.findOneAndUpdate({ "email": req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log("error in orderData update");
            // res.json("server error", error.message)
        }
    }
})

router.post("/myOrderData", async (req, res) => {
    try {
        let myData = await Order.findOne({ "email":req.body.email })
        res.json({ orderData: myData })
    } catch (error) {

    }

})

export default router;