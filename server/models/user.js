
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            // required: false,
            minlength: 3,
            maxlength: 25,
        },
        lastname: {
            type: String,
            // required: false,
            minlength: 3,
            maxlength: 25,
        },
        username: {
            type: String,
            // required: true,
            minlength: 6,
            maxlength: 25,
            unique: true,
        },
        email: {
            type: String,
            // required: false,
            minlength: 10,
            maxlength: 50,
            unique: true,
        },
        password: {
            type: String,
            // required: true,
            minlength: 8,
            maxlength: 1024,
        },
        phonenumber: {
            type: String,
            // required: false,
            minlength: 10,
            maxlength: 10,
            unique: true,
        },
        confirmationCode: {
            type: String,
            // required: false,
        },
        admin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', userSchema);
