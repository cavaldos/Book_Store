const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/react-login-tut')
    .then(() => {
        console.log('mongodb connected');
    })
    .catch(() => {
        console.log('failed');
    });

const newSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    confirmationCode: {
        type: String,
        required: false,
    },
});

const collection = mongoose.model('collection', newSchema);

module.exports = collection;
