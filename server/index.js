const express = require('express');
require('./config/connectmongod');

const app = express();
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});
