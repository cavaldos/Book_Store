const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
    },

    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
    },
    rating: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    Genre: {
        type: String,
        required: true,
    },

    publishYear: {
        type: Number,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    ISBN: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25,
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Book', bookSchema);