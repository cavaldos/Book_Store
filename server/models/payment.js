const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  userName: {
    type: String,
    required: false,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;

