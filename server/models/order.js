const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 25,
        unique: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    address: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25,
    },
    books: [{
        type: Object,
        of: {
            book: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Book'
            },
            quantity: Number
        },
        required: true
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateShipped: {
        type: Date,
        default: null
    },
    dateReceived: {
        type: Date,
        default: null
    },
    totalPrice: {
        type: Number,
        default: 0,
        required: true,
    },
    isPaid: {
        type: Boolean,
        default: false,
        required: true,
    },
    isDelivered: {
        type: Boolean,
        default: false,
        required: true,
    }
});
module.exports = mongoose.model("Order", orderSchema);