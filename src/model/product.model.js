import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'Farmer',
        required: true
    },
    imageUrl: { type: String, required: false }
});

const Product = model('Product', productSchema);

export default Product;
