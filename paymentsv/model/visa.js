const mongosses = require("mongoose");
const VisaSchema = new mongosses.Schema({
  id_card: {
    type: Number,
    required: true,
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    unique: true,
  },

  cardNumber: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
    unique: true,
  },
  cardName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  validFrom: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10,
  },
  validThru: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10,
  },

  cardCvv: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 3,
  },
  accountBalance: {
    type: Number,
    minlength: 1,
    maxlength: 50,
    default: 50000,
  },
});
const Visa = mongosses.model("Visa", VisaSchema);
module.exports = Visa;
