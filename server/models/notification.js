const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 25,
        unique: true,
        default: null,
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100,
        default: "..."
    },
    time: {
        type: Date,
        required: true,
        default: Date.now,
    },
    statusbar: {
        type: Boolean,
        required: true,
        default: false,
    },

});
module.exports = mongoose.model("Notification", notificationSchema);