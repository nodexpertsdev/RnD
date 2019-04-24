import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;

const productsSchema = new Schema({
  name: {
    type: String,
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
  isDiscontinued: {
    type: Boolean,
    required: false,
  },

}, { collection: 'product', timestamps: true });


const Product = mongoose.model('Products', productsSchema);


export default Product;
