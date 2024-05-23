// Defines the schema for the Product document using Mongoose.

import mongoose from 'mongoose';

// Define schema for the Product collection
const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    pop: { type: String, enum: ['Neutral', 'Pop'], required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

export default Product;