const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const connectDB = require('./config/connectdb');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use('/v1/auth', authRoutes);
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});

// mongoose
//     .connect(process.env.MONGODB_URL1)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((err) => console.log('connect false \n', err));
