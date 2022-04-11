const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookTitle: String,
    author: String,
    category: String,
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //books



