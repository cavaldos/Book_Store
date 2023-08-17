const mongoose = require("mongoose");

const revenueSchema = new mongoose.Schema({
  time: {
    year: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  },
  amount: {
    type: Number,
    required: true,
  },
  total_revenue: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("Revenue", revenueSchema);
// /*

// time: {
//     year: 2022,
//     month: "August",
//     day: 24,
//   },
//   amount: 1000,
//   productRatings: [
//     {
//       productId: "60f63c9e80d5e021c0efc653", // ID của sản phẩm 1
//       rating: 4.5,
//     },
//     {
//       productId: "60f63c9e80d5e021c0efc654", // ID của sản phẩm 2
//       rating: 3.8,
//     },
//   ],
// */
