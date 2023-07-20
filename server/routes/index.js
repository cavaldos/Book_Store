const router = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const walletController = require("../controllers/walletController");

router.get("/", (req, res) => {
  res.json({ message: "connected" });
});

//AUTHENTICATION
router.get("/signin", authController.signin);
router.post("/signup", authController.register);
router.post("/logout", authController.logout);
router.post("/resetpassword", authController.resetpassword);
router.post("/verify", authController.sendConfirmationCode);

//user
router.post("/adduser", userController.addUser);
router.post("/edituser", userController.editUser);
router.get("/getallusers", userController.getAllusers);

//BOOK
router.post("/addbook", bookController.addBook);
router.post("/editbook", bookController.editBook);
router.get("/getallbooks", bookController.getAllBooks);

//WALLET
router.post("/addwallet", walletController.addWallet);
router.post("/editwallet", walletController.editWallet);
router.get("/getallwallet", walletController.getAllWallet);

module.exports = router;
