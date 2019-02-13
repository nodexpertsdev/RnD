import mongoose from 'monogoose';
import { Schema } from 'mongoose';



const productsSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    supplierId:{
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    package:{
        type: String,
        required: false
    },
    isDiscontinued: {
        type: boolean,
        required: false
    }

}, {collection: "product", timestamp: true});

productsSchema.index({ name: 1, supplierId: 1 }, { unique: true });

const ProductModel = mongoose.model('Products', productsSchema);


export default ProductModel;