import {
  Schema,
  model,
} from 'mongoose';

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

}, {
  collection: 'orders',
  timestamp: true,
});
const Order = model('orders', ordersSchema);

export default Order;
