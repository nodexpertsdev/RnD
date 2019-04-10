import {
  Schema,
  model,
} from 'mongoose';

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

}, {
  collection: 'product',
  timestamp: true,
});


const ProductModel = model('Products', productsSchema);


export default ProductModel;
