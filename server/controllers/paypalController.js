// backend/controllers/paypalController.js
const paypal = require('@paypal/checkout-server-sdk');
const clientId = 'ARF0pHipAONXG7QsSM6RJ-nOr58xelyRzLltsZMjJzc-bj-9CPPMiJvdCN9TygequiImpNATqBKL6JTj';
const clientSecret = 'EEQBn0hyJEudmHIDcK2SicQdQ8j0EDuw7W8qjzy5ehj1BgP4WUqirx0j0vh8A8RgkJCvms4HIzO9qC6M';

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

const paypalController = {
    capturePayment: async (req, res) => {
        const orderID = req.body.orderID;
        
        try {
            const getRequest = new paypal.orders.OrdersGetRequest(orderID);
            const getResponse = await client.execute(getRequest);

            if (getResponse.result.status !== 'COMPLETED') {
                // Nếu đơn hàng chưa được capture, tiến hành capture
                const captureRequest = new paypal.orders.OrdersCaptureRequest(orderID);
                const captureResponse = await client.execute(captureRequest);
            }
          
            res.status(200).send('Payment captured successfully.');
        } catch (error) {
            // Xử lý lỗi
            console.error(error);
            res.status(500).send('An error occurred while capturing payment.');
        }
    },
  };
  
  module.exports = paypalController;
  