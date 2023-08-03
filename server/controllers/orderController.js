const Order = require("../models/order");

const orderController = {
  createOrder: async (req, res) => {
    try {
      const { order_code, address, price_total, state, order_volume } =
        req.body;
      //   console.log("order_volume", req.body);
      const order = new Order({
        order_code: order_code,
        address: address,
        price_total: price_total,
        state: state,
        order_volume: order_volume,
      });
      console.log("order", order);
      await order.save();
      res.json("success");
    } catch {
      res.json("fail");
    }
  },
  getAllOrder: async (req, res) => {
    try {
      const order = await Order.find();
      res.json(order);
    } catch {
      res.json("fail");
    }
  },
  setStateOrder: async (req, res) => {
    try {
      const { order_code, state } = req.body;
      await Order.findOneAndUpdate(
        { order_code: order_code },
        { state: state }
      );
      res.json("success");
    } catch {
      res.json("fail");
    }
  },
  findOrder: async (req, res) => {
    try {
      const { order_code } = req.body;
      const order = await Order.findOne({ order_code: order_code });
      if (order) {
        res.json(order);
      } else if (!order) {
        res.json("fail");
      }
    } catch {
      res.json("fail");
    }
  },
  removeOrder: async (req, res) => {
    try {
      const { order_code } = req.body;
      await Order.findOneAndDelete({ order_code: order_code });
      res.json("success");
    } catch {
      res.json("fail");
    }
  },
};

module.exports = orderController;
