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
  genreBreakdown: async (req, res) => {
    try{
      const genre = await Order.aggregate([
        {
          '$match': {
            'state': 2
          }
        }, {
          '$project': {
            'order_volume': 1
          }
        }, {
          '$unwind': {
            'path': '$order_volume'
          }
        }, {
          '$group': {
            '_id': '$order_volume.id_book', 
            'nSold': {
              '$sum': '$order_volume.quantity'
            }
          }
        }, {
          '$lookup': {
            'from': 'books', 
            'localField': '_id', 
            'foreignField': 'ID', 
            'as': 'book_info'
          }
        }, {
          '$group': {
            '_id': {
              '$arrayElemAt': [
                '$book_info.Genre', 0
              ]
            }, 
            'nSold': {
              '$sum': '$nSold'
            }
          }
        }
      ]);
      res.status(200).json({genre});
    }
    catch (err) {
      res.status(500).json({
        message: err.message,
    });
   }
  }
};

module.exports = orderController;