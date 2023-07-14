module.exports = {
    // Cấu hình server
    server: {
        port: process.env.PORT || 3000, // Cổng server
        host: process.env.HOST || 'localhost', // Địa chỉ server
    },

    // Cấu hình database
    database: {
        connectionLimit: 10, // Số lượng kết nối tối đa đến database
        host: process.env.DB_HOST || 'localhost', // Địa chỉ database
        user: process.env.DB_USER || 'root', // Tên đăng nhập database
        password: process.env.DB_PASSWORD || '123456', // Mật khẩu đăng nhập database
        database: process.env.DB_NAME || 'mydatabase', // Tên database
    },

    // Cấu hình gửi email
    email: {
        service: 'gmail', // Tên dịch vụ email
        auth: {
            user: process.env.EMAIL_USER || 'your-email@gmail.com', // Địa chỉ email
            pass: process.env.EMAIL_PASSWORD || 'your-email-password', // Mật khẩu email
        },
    },

    // Cấu hình biến môi trường
    env: {
        NODE_ENV: process.env.NODE_ENV || 'development', // Môi trường phát triển
        JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key', // Khóa bí mật cho JSON Web Token
        SESSION_SECRET: process.env.SESSION_SECRET || 'your-secret-key', // Khóa bí mật cho session
    },
};


const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    // Get the documents collection
    const collection = db.collection('documents');

    // Find all documents
    collection.find({}).toArray(function (err, docs) {
        console.log('Found the following records:');
        console.log(docs);
    });

    // Close the client
    client.close();
});