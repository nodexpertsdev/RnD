import {
  Schema,
  model,
} from 'mongoose';

const customerSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
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

customerSchema.pre('save', function preSave() {
  const customer = this;
  customer.id = customer._id.toString();
});

const Customer = model('Customers', customerSchema);


export default Customer;
