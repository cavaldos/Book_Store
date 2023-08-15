const router = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const orderController = require("../controllers/orderController");
const revenueController = require("../controllers/revenueController");
//AUTHENTICATION
router.post("/signin", authController.signin); // đã viết xong
router.post("/register", authController.register); // đã viết xong
router.post("/logout", authController.logout); // chưa viết
router.post("/resetpassword", authController.resetpassword); // chưa xong
router.post("/verify", authController.sendConfirmationCode); // chưa xong
router.post("/verifyemailsignup", authController.verifyEmailSignUp); // chưa xong
//user
router.delete("/deleteuser", userController.deleteUser); // da xong, test ok roi
router.post("/adduser", userController.addUser); // da xong, test ok roi
router.put("/edituser", userController.editUser); // da xong chua test
router.get("/getallusers", userController.getAllusers); // đã viết xong
router.get("/getnumberuser", userController.getNumberOfUsers); // đã viết xong
router.post("/getuserbyemail", userController.getUserByemail); // đã viết xong

//BOOK
router.post("/addbook", bookController.addBook); //  da xong, da test
router.post("/editbook", bookController.editBook); // da xong, da test
router.get("/getallbooks", bookController.getAllBooks); // da xong, da test // da xong, da test
router.get("/gettopbooks", bookController.getTopBooks); // da xong, da test // da xong, da test
router.delete("/deletebook", bookController.deleteBook); // da xong, da test
router.post("/findbooks", bookController.findBook); // da xong, da test
router.get("/getallbookmanage", bookController.getallBookManage); // da xong, da test
router.get("/getrating", bookController.getRatingBook); // da xong, da test
router.get("/getgenre", bookController.getGenreBook); // da xong, da test
router.get("/:id", bookController.getBookById); // da xong, da test
router.get("/search/:query", bookController.searchBook); // da xong, da test
//order
router.post("/getallorder", orderController.getAllOrder); // da xong, da test // da xong, da test
router.post("/createorder", orderController.createOrder); // da xong, da test
router.put("/setstateorder", orderController.setStateOrder); // da xong, da test
router.post("/findorder", orderController.findOrder); // da xong, da test
router.delete("/removeorder", orderController.removeOrder); // da xong, da test

//revenue
router.post("/findrevenue", revenueController.findRevenue); // da xong, da test
router.post("/findrevenuebydate", revenueController.findRevenue); // da xong, da test
router.get("/findyear/:year", revenueController.findByYear); // da xong, da test
module.exports = router;
