import {
  Schema,
  model,
} from 'mongoose';

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
}, { collection: 'customers', timestamp: true });

const Customer = model('Customers', customerSchema);


export default Customer;
