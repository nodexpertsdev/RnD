import mongoose from 'mongoose';

import { Schema } from 'mongoose';

const orderSchema = new Schema({
    orderNumber:{
        type: Number,
        required: true
    },
    supplierId:{
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    package:{
        type: String,
        required: false
    },

}, {collection: "order", timestamp: true});


const Order = mongoose.model('Order', orderSchema);


export default Order;