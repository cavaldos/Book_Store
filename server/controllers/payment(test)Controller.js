const dotenv = require("dotenv");
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const paymentController = {
    sendStripApi: async (req, res, next) => {
      res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
      });
    }
  };
  
module.exports = paymentController;