const Notification = require("../models/notification");


const notifyController = {
    addNotify: async (req, res) => {
        try {
            const data = req.body;
            console.log(data);
            const newNotify = new Notification({
                id: data.id,
                content: data.content,
                time: data.time,
                statusbar: data.statusbar,
            });

            // Save the new Notification document to the database
            await newNotify.save();
            // Send a response to the client
            res.status(201).json(newNotify);
        }
        catch (err) {
            // Handle errors
            res.status(500).json({
                message: err.message,
            });
        }
    }
    ,
    deleteNotify: async (req, res) => {
        try {
            const data = req.body;
            const maso = data.id;
            const users = await Notification.deleteOne({ id: maso });
            res.status(200).json(users);
        }

        catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }
    ,
    getAllNotify: async (req, res) => {
        try {
            const users = await Notification.find();
            res.status(200).json(users);
            // res.json(dataToSend);
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }
    ,
    editNotify: async (req, res) => {

        try {
            const data = req.body;
            const maso = data.id;
            const users = await Notification.updateOne({ id: maso }, { statusbar: true });
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }
    ,
    getNotify: async (req, res) => {
        try {
            const data = req.body;
            const maso = data.id;
            const users = await Notification.find({ id: maso });
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }
    ,
    getNotifyByStatus: async (req, res) => {
        try {
            const data = req.body;
            const maso = data.statusbar;
            const users = await Notification.find({ statusbar: maso });
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({
                message: err.message,
            });
        }
    }

};
module.exports = notifyController;