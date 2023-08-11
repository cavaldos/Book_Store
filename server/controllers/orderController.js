const Order = require("../models/order");

const orderController = {
  getAllOrder: async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },

  createOrder: async (req, res) => {
    try {
      console.log(req.body);
      const data = req.body;
      const order = new Order({
        id_order: data.id_order,
      });
      const result = await order.save();
      res.status(200).json(result);

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = orderController;
