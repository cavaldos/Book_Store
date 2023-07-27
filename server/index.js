const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const connectDB = require('./utils/connectdb');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Cổng mặc định cho server
const PORT = process.env.PORT || 8000;

app.use('/v1/auth', authRoutes);

// Middleware để xử lý JSON
app.use(express.json());

var corsOptions = {
    origin: "http://localhost:3000"
  };

app.use(cors(corsOptions));

// Route mặc định
app.get('/', (req, res) => {
    res.send('Chào mừng đến với backend của tiệm sách!');
});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

require('./routes/user.routes.js')(app);
