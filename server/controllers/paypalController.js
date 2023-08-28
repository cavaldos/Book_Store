// backend/controllers/paypalController.js
const User = require("../models/user");
const Order = require("../models/order");
const paypal = require("@paypal/checkout-server-sdk");
const { use } = require("../routes");
const dotenv = require("dotenv");
dotenv.config();
const clientId = process.env.CLIENT_ID_PAYPAL;
const clientSecret = process.env.CLIENT_ID_SECRET_PAYPAL;
console.log("clientId", clientId);
console.log("clientSecret", clientSecret);
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

const paypalController = {
  test: async (req, res) => {
    try {
      const user = await User.findOne({ email: "user@gmail.com" });
      user.list_id_oder.push("123", "dsfs");
      const check = await user.save();
      console.log("check", check);
      res.json("success");
    } catch (error) {
      res.json({ message: "fail", error: error.message });
    }
  },
  capturePayment: async (req, res) => {
    const orderID = req.body.orderID;
    const { id_order, email, price_total, state, order_volume } =
      req.body.props;

    try {
      const order = new Order({
        id_order: id_order,
        email: email,
        price_total: price_total,
        state: state,
        order_volume: order_volume,
      });
      const user = await User.findOne({ email: email });
      user.list_id_oder.push(id_order);
      await user.save();

      await order.save();
      const getRequest = new paypal.orders.OrdersGetRequest(orderID);
      const getResponse = await client.execute(getRequest);

      if (getResponse.result.status !== "COMPLETED") {
        // Nếu đơn hàng chưa được capture, tiến hành capture
        const captureRequest = new paypal.orders.OrdersCaptureRequest(orderID);
        const captureResponse = await client.execute(captureRequest);
      }

      res.status(200).send("Payment captured successfully.");
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
      res.status(500).send("An error occurred while capturing payment.");
    }
  },
};

module.exports = paypalController;
