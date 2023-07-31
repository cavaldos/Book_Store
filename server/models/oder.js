const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 25,
        unique: true,
    },
    nameoder: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25,
    },
    address: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 25,
    },
});
module.exports = mongoose.model("Order", orderSchema);