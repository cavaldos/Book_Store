const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/react-login-tut", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error);
    });
};

module.exports = dbConnect;

// mongoose
//     .connect('mongodb://localhost:27017/react-login-tut')
//     .then(() => {
//         console.log('mongodb connected local');
//     })
//     .catch(() => {
//         console.log('failed local');
//     });
