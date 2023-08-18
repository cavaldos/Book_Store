const Visa = require("../model/visa");
const History = require("../model/history");
const VisaController = {
  async getVisa(req, res) {
    try {
      const visa = await Visa.find();
      res.status(200).json(visa);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async addVisa(req, res) {
    try {
      const {
        id_card,
        cardNumber,
        cardName,
        validFrom,
        validThru,
        cardCvv,
        accountBalance,
      } = req.body;

      const visaExist = await Visa.findOne({ id_card: id_card });
      if (visaExist) {
        res.status(400).json("exists");
        return;
      }

      const isCvvValid = /^\d+$/.test(cardCvv);
      const isValidFromValid = /^\d{2}\/\d{2}$/.test(validFrom);

      if (!isCvvValid || !isValidFromValid) {
        res.status(400).json("CVVformat");
        return;
      }

      const visa = new Visa({
        id_card,
        cardNumber,
        cardName,
        validFrom,
        validThru,
        cardCvv,
        accountBalance,
      });

      await visa.save();

      res.status(201).json("addvisasuccess");
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  async actions(req, res) {
    try {
      const { id_card, id_order, price } = req.body;
      console.log("body", req.body);
      const visa = await Visa.findOne({ id_card: id_card });
      // const check_idcard = await Visa.findOne({ id_card: id_card });
      if (visa.accountBalance < price) {
        res.status(400).json({ message: "Not enough money" });
        return;
      } else {
        visa.accountBalance = visa.accountBalance - price;
        await visa.save();
        const history = new History({
          price: price,
          id_order: id_order,
          numberCard: visa.cardNumber,
          nameUser: visa.cardName,
        });
        await history.save();
      }
      res.status(201).json(visa);
    } catch (error) {
      
      res.status(500).json(error);
    }
  },
  async getAccoubtBalance(req, res) {
      try {
        const { id_card } = req.body;
        const data = await Visa.findOne({ id_card: id_card });

        if (data) {
          res.status(200).json(data.accountBalance);
        } else {
          res.status(200).json("Account balance does not exist");
        }
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  },
  async getHistory(req, res) {
    History.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = VisaController;
