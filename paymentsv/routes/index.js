const router = require("express").Router();
const VisaController = require("../controllers/visaController");

router.get("/getvisa", VisaController.getVisa);
router.post("/addvisa", VisaController.addVisa);
router.post("/actions", VisaController.actions);
router.get("/gethistory", VisaController.getHistory);
router.post("/getaccountbalance", VisaController.getAccoubtBalance);
module.exports = router;
