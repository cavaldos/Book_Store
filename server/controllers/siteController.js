const Course = require("../models/course");

const SiteControllers = {
  index: async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json({ success: true, courses });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};
module.exports = SiteControllers;
