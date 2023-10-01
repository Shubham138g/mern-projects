import mongoose from "mongoose";

const OrderSchmema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    order_data:{
        type:Array,
        required:true,
    },
});

const Order= mongoose.model('order',OrderSchmema);

export default Order;