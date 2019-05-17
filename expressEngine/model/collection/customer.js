import mongoose from 'mongoose';

import modelLib from '../lib';

const { Schema } = mongoose;


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
    required: [true, 'Email is required'],
    validate: {
      validator: email => modelLib.validateEmail(email),
      message: props => `${props.value} is not a valid email!`,
    },
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
    validate: {
    validator: contactNo => modelLib.validateContactNumber(contactNo),
      message: props => `${props.value} is not a valid contact number!`,
    }
  },
}, { collection: 'customers', timestamps: true });

customerSchema.pre('save', function preSave() {
  const customer = this;
  customer.id = customer._id.toString();
});

const Customer = mongoose.model('Customers', customerSchema);


export default Customer;
