import mongoose from 'mongoose';
import modelLib from '../lib';

const {
  Schema,
} = mongoose;

const ordersSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
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
  status: {
    type: String,
    enum: modelLib.orderStatus(),
    required: true,
  },

}, {
  collection: 'orders',
  timestamps: true,
});

ordersSchema.pre('save', function preSave() {
  const order = this;
  order.id = order._id.toString();
});

const Order = mongoose.model('orders', ordersSchema);

export default Order;
