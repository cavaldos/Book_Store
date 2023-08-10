const Revenue = require("../models/revenue");
const mongoose = require("mongoose");

const revenueController = {
  
  findRevenue: async (req, res) => {
    try {
      const { year, month } = req.body;
      console.log("year", year);
      console.log("month", month);
      const foundRevenue = await Revenue.find({
        "time.year": year,
        "time.month": month,
      });
      if (foundRevenue.length > 0) {
        res.json(foundRevenue);
      } else {
        res.json("timenotfound");
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  findByYear: async (req, res) => {
    try {
      const { year } = req.body;
      console.log("year", year);
      const foundRevenue = await Revenue.find({
        "time.year": year,
      });
      if (foundRevenue.length > 0) {
        res.json(foundRevenue);
      } else {
        res.json("fail");
      }
    } catch {
      res.json("yearnotfound");
    }
  },
};

module.exports = revenueController;
