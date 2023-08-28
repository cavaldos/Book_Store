const Order = require("../models/order");
const User = require("../models/user");
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
      console.log("req.body", req.body);
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
      console.log("id_order", id_order);
      console.log("state", state);
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
      console.log("id_order", id_order);
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
      // console.log("id_order", id_order);
      const resultat = await Order.findOneAndDelete({ id_order: id_order });

      if (resultat) {
        res.json("success");
      } else {
        res.json("fail");
      }
    } catch (erreur) {
      res.json(
        "Une erreur s'est produite lors de la suppression de la commande : " +
          erreur.message
      );
    }
  },
};

module.exports = orderController;
