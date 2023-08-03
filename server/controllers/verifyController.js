const express = require('express');
const User = require('../models/user');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'khanh@gmail.com',
        pass: '1234567',
    },
});
const verifyControllers = {
    sendConfirmationEmail: async (req, res) => {
        try {
            const mailOptions = {
                from: 'khanh',
                to: email,
                subject: 'Confirmation Code for Password Reset',
                text: `Your confirmation code is: ${confirmationCode}`,
            };
        } catch (err) {
            console.log('Error sending confirmation email:', err);
        }
    },
};
module.exports = verifyControllers;