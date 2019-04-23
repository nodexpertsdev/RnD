import mongoose from 'mongoose';
const { Schema } = mongoose

const orderItem = new Schema({
    orderId: {
        type: String,
        unique:true,
        required: true
    },
    productId: {
        type: String,
        unique:true,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    qunatity: {
        type: Number,
        required: true
    }
})

const OrderItems = mongoose.model("OrderItems",orderItem)

export default OrderItems;