import mongoose from 'mongoose';
const { Schema } = mongoose

const orderItem = new Schema({
    orderId: {
        type: String,
        unique:true
    },
    productId: {
        type: String,
        unique:true
    },
    unitPrice: {
        type: Number,
    },
    qunatity: {
        type: Number
    }
})

const orderItems = mongoose.model("OrderItems",orderItem)

export default orderItems;