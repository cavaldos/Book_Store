const router = require("express").Router();
const userController = require("../controllers/useController");
const authController = require("../controllers/authController");
const bookController = require("../controllers/bookController");
const walletController = require("../controllers/walletController");

// USER ROUTES
// router.post("/", userController.addUser);
router.put("/:", userController.editUser);
router.get("/getalluser", userController.getAllusers);
router.post("/adduser", userController.addUser);


// AUTHENTICATOR ROUTES
router.get("/login", authController.login);
router.get("/register", authController.register);
router.get("/logout", authController.logout);
router.get("/fogotpassword", authController.fogotpassword);

//BOOK ROUTES
router.get("/getallbook", bookController.getAllBooks);
router.get("/addbook", bookController.addBook);
router.get("/editbook/", bookController.editBook);

// WALLET ROUTES
router.get("/addwallet", walletController.addWallet);
router.get("/getallwallet", walletController.getAllWallet);
module.exports = router;
