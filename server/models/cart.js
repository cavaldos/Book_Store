const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    ID: { //book ID
        type: Number,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 25,
    },
    Tittle: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
    },
    Price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
    id: { //user ID
        type: Number,
        // required: true,
        minlength: 1,
        maxlength: 25,
        unique: true,
      },
    username: {
        type: String,
        // required: true,
        minlength: 1,
        maxlength: 25,
        default: null,
    },
});
module.exports = mongoose.model('Cart', cartSchema);