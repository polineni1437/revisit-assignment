import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    itemCount: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Category = new mongoose.model('Category', categorySchema);

export default Category;