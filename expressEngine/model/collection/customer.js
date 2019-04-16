import {
    Schema,
    model,
} from 'mongoose';

const customerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
}, { collection: 'customers', timestamp: true });

const Customer = model('Customers', customerSchema);


export default Customer;
