import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;

const ordersSchema = new Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  supplierId: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  package: {
    type: String,
    required: false,
  },

}, { collection: 'orders', timestamps: true });
const Order = mongoose.model('Orders', ordersSchema);

export default Order;
