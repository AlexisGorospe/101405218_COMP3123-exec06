const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    author: String,
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    }
});

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;