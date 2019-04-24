import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;

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
}, { collection: 'customers', timestamps: true });

const Customer = mongoose.model('Customers', customerSchema);


export default Customer;
