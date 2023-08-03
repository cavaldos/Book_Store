const Order = require('../models/order')
const orderController = {
    addOrder: async (req, res) => {
      try {
      const data = req.body;
      const newOrder = new Order({
        id: data.id,
        customer: data.customer,
        address: data.address,
        books: data.books,
        dateCreated: Date.now(),
    });
        await newOrder.save();
        res.status(201).json(newOrder);
      }
      catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    },
    getAllOrders: async (req, res) => {
        try {
            const orders = await Order.find();
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json({
            message: err.message,
            });
        }
    },
    getRevenueByMonth: async (req, res) => {
        try {
            const revenues = await Order.aggregate([
                {
                  '$match': {
                    'isPaid': true
                  }
                }, {
                  '$group': {
                    '_id': {
                      'year': {
                        '$year': '$dateCreated'
                      }, 
                      'month': {
                        '$month': '$dateCreated'
                      }
                    }, 
                    'total_income': {
                      '$sum': '$totalPrice'
                    }
                  }
                }, {
                  '$limit': 18
                }
              ])
            res.status(200).json(revenues);
        } catch (err) {
            res.status(500).json({
            message: err.message,
            });
        }
    },
    getReport: async (req, res) => {
        try {
            const revenues = await Order.aggregate([
                // Match documents where the orderDate field is within the last month
                {
                  $match: {
                    orderDate: {
                      $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
                      $lte: new Date()
                    }
                  }
                },
                // Group by user ID and count the number of orders and total sum
                {
                  $group: {
                    _id: '$userId',
                    numOrders: { $sum: 1 },
                    totalSum: { $sum: '$orderTotal' }
                  }
                },
                // Group by null to get the total number of users, total number of orders, and overall total sum
                {
                  $group: {
                    _id: null,
                    numUsers: { $sum: 1 },
                    numOrders: { $sum: '$numOrders' },
                    totalSum: { $sum: '$totalSum' }
                  }
                }
              ])
            res.status(200).json(revenues);
        } catch (err) {
            res.status(500).json({
            message: err.message,
            });
        }
    },
    deleteOrder: async (req, res) => {
      try {
        const data = req.body;
        const maso = data.ID;
        const users = await Order.deleteOne({ ID: maso });
        res.status(200).json(users);
      }
  
      catch (err) {
        res.status(500).json({
          message: err.message,
        });
      }
    },
};

module.exports = orderController;