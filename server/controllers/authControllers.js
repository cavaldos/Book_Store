const bycrypt = require('bcryptjs');
const User = require('../models/user.model');

const authControllers = {
    registerUser: async (req, res) => {
        try {
            const salt = await bycrypt.genSalt(10);
            const hashedPassword = await bycrypt.hash(req.body.password, salt);
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
            });
            //save to db
            const user = await newUser.save();
            res.status(200).json({
                success: true,
                message: 'User created',
                user,
            });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    loginUser: async (req, res) => {
        try {
            const user = await user.findone({
                username: req.body.username,
            });
            if (!user)
                return res
                    .status(400)
                    .json({
                        success: false,
                        message: 'Username or password is wrong',
                    });
            const validPassword = await bycrypt.compare(
                req.body.password,
                user.password,
            );
            if (!validPassword)
                {
                    res.status(400).json("wrong password");

                }
            if (user && validPassword) {
                res.status(200).json(user);
            }
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
};
module.exports = authControllers;
