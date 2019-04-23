import {
  Schema,
  model,
} from 'mongoose';

const ordersSchema = new Schema({
  orderId: {
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

}, {
  collection: 'orders',
  timestamp: true,
});

ordersSchema.pre('save', async function preSave() {
  const order = this;
  order.orderId = order._id.toString();
});

const Order = model('orders', ordersSchema);

export default Order;
