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
    getReport: async (req, res) => {
        try {
            const revenues = await Order.aggregate([
                {
                  '$match': {
                    'isPaid': true
                  }
                }, {
                  '$sort': {
                    'dateCreated': 1
                  }
                }, {
                  '$group': {
                    '_id': {
                      '$dateToString': {
                        'format': '%m/%Y', 
                        'date': '$dateCreated'
                      }
                    }, 
                    'totalIncome': {
                      '$sum': '$totalPrice'
                    }
                  }
                }, {
                  '$limit': 12
                }
              ]);
            const overview = await Order.aggregate([
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
            const genreData = await Order.aggregate([
                {
                  '$match': {
                    'isPaid': true
                  }
                }, {
                  '$group': {
                    '_id': '$books.book', 
                    'nSold': {
                      '$sum': '$books.quantity'
                    }
                  }
                }, {
                  '$lookup': {
                    'from': 'books', 
                    'localField': '_id', 
                    'foreignField': '_id', 
                    'as': 'book_info'
                  }
                }, {
                  '$group': {
                    '_id': {
                      '$first': '$book_info.Genre'
                    }, 
                    'nSold': {
                      '$sum': '$nSold'
                    }
                  }
                }
              ]);
            const bestSellers = await Order.aggregate([
                {
                  '$match': {
                    'isPaid': true
                  }
                }, {
                  '$group': {
                    '_id': '$books.book', 
                    'nSold': {
                      '$sum': '$books.quantity'
                    }
                  }
                }, {
                  '$lookup': {
                    'from': 'books', 
                    'localField': '_id', 
                    'foreignField': '_id', 
                    'as': 'book_info'
                  }
                }, {
                  '$sort': {
                    'nSold': -1
                  }
                }, {
                  '$limit': 10
                }
              ]);
            res.status(200).json({overview, revenues, genreData, bestSellers});
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