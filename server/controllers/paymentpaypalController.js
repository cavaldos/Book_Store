const Payment = require('../models/payment');


const paymentpaypalController = {
  createPayment: async (req, res) => {
    try {
      const { amount } = req.body;
      const payment = await Payment.create({ amount : amount, status: 'pending' });
      res.json({ payment });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create payment' });
    }
  },

  getPaymentById: async (req, res) => {
    try {
      const payment = await Payment.findById(req.params.id);
      if (!payment) {
        return res.status(404).json({ error: 'Payment not found' });
      }
      res.json({ payment });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get payment' });
    }
  },

  updatePaymentStatus: async (req, res) => {
    try {
      const { status } = req.body;
      const payment = await Payment.findByIdAndUpdate(
        req.params.id,
        { $set: { status: status } },
        { new: true }
      );
      if (!payment) {
        return res.status(404).json({ error: 'Payment not found' });
      }
      res.status(200).json({ success: 'update success' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update payment status' });
    }
  },
  getPayments: async (req, res) => {
    try {
      const payments = await Payment.find();
      res.json({ payments });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get payments' });
    }
  },

  getUserPayments: async (req, res) => {
    const { email } = req.params;
    try {
      const userPayments = await Payment.find({ email });
      res.json({ userPayments });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get user payments' });
    }
  },
  deletePayment: async (req, res) => {
    try {
      const payment = await Payment.findByIdAndDelete(req.params.id);
      if (!payment) {
        return res.status(404).json({ error: 'Payment not found' });
      }
      res.json({ message: 'Payment deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete payment' });
    }
  }
};

module.exports = paymentpaypalController;
