const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();
mongoose
    .connect(process.env.MONGODB_URL1)
    .then(() => console.log('Connected to MongoDB cloud'))
    .catch((err) => console.log('connect false \n', err));

// mongoose
//     .connect('mongodb://localhost:27017/react-login-tut')
//     .then(() => {
//         console.log('mongodb connected local');
//     })
//     .catch(() => {
//         console.log('failed local');
//     });
