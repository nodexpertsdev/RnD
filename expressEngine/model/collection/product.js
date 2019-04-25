import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;

const productsSchema = new Schema({
  id: {
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

}, { collection: 'product', timestamps: true });

productsSchema.pre('save', function preSave() {
  const product = this;
  product.id = product._id.toString();
});


const Product = mongoose.model('Products', productsSchema);


export default Product;
