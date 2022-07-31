import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;