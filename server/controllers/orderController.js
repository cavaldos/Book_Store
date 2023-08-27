const Order = require("../models/order");
const orderController = {
  getAllOrder: async (req, res) => {
    try {
      const orders = await Order.find().lean();
      res.json(orders);
    } catch (error) {
      res.json({ message: "fail", error: error.message });
    }
  },

  createOrder: async (req, res) => {
    try {
      const { id_order, address, price_total, state, order_volume } = req.body;
      const order = new Order({
        id_order: id_order,
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
  getStateOrder: async (req, res) => {
    try {
      const { state } = req.body;
    } catch {
      res.json("fail");
    }
  },

  setStateOrder: async (req, res) => {
    try {
      const { id_order, state } = req.body;
      const updatedOrder = await Order.findOneAndUpdate(
        { id_order: id_order },
        { state: state }
      );
      if (updatedOrder) {
        res.json("success");
      } else {
        res.status(404).json("Order not found");
      }
    } catch (error) {
      res.status(500).json("fail");
    }
  },
  findOrder: async (req, res) => {
    try {
      const { id_order } = req.body;
      const orders = await Order.find({ id_order: { $in: id_order } });
      if (orders.length > 0) {
        res.json(orders);
      } else {
        res.json("fail");
      }
    } catch (error) {
      res.json("fail");
    }
  },
  removeOrder: async (req, res) => {
    try {
      const { id_order } = req.body;
      await Order.findOneAndDelete({ id_order: id_order });
      res.json("success");
    } catch {
      res.json("fail");
    }
  },
};

module.exports = orderController;
