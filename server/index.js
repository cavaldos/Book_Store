const express = require('express');
require('./config/connectmongod');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const connectDB = require('./config/connectdb');

const dotenv = require('dotenv');
dotenv.config();


app.use('/v1/auth', authRoutes);
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});

