import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;

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
}, { collection: 'customers', timestamps: true });

customerSchema.pre('save', function preSave() {
  const customer = this;
  customer.id = customer._id.toString();
});

const Customer = mongoose.model('Customers', customerSchema);


export default Customer;
