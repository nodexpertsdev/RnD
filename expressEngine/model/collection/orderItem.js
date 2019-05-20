import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderItemSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderItem = mongoose.model('OrderItems', orderItemSchema);

export default orderItem;
