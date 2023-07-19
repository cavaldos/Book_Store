const wallet = require("../models/wallet");

const walletController = {
  addWallet: async (req, res) => {
    try{
        res.json({message: "addwallet"});
    }
    catch(err){
        res.status(500).json({
            message: err.message,
        });
    }
  },
  getAllWallet: async (req, res) => {
    try {
        const users = await wallet.find();
        res.status(200).json(users);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};

module.exports = walletController;