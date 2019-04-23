import {
  Schema,
  model,
} from 'mongoose';

const productsSchema = new Schema({
  productId: {
    type: String,
    unique: true,
  },
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

productsSchema.pre('save', async function preSave() {
  const product = this;
  product.productId = product._id.toString();
});


const Product = model('Products', productsSchema);


export default Product;
