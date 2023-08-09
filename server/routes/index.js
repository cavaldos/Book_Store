const router = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const orderController = require("../controllers/orderController");

//AUTHENTICATION
router.post("/signin", authController.signin); // đã viết xong
router.post("/register", authController.register); // đã viết xong
router.post("/logout", authController.logout); // chưa viết
router.post("/resetpassword", authController.resetpassword); // chưa xong
router.post("/verify", authController.sendConfirmationCode); // chưa xong
router.post("/verifyemailsignup", authController.verifyEmailSignUp); // chưa xong
//user
router.post("/deleteuser", userController.deleteUser); // da xong, test ok roi
router.post("/adduser", userController.addUser); // da xong, test ok roi
router.post("/edituser", userController.editUser); // da xong chua test
router.get("/getallusers", userController.getAllusers); // đã viết xong
// router.get("/gettopusers", userController.getTopUsers); // đã viết xong
router.get("/getnumberuser", userController.getNumberOfUsers); // đã viết xong

//BOOK
router.post("/addbook", bookController.addBook); //  da xong, da test
router.post("/editbook", bookController.editBook); // da xong, da test
router.get("/getallbooks", bookController.getAllBooks); // da xong, da test // da xong, da test
router.get("/gettopbooks", bookController.getTopBooks); // da xong, da test // da xong, da test
router.delete("/deletebook", bookController.deleteBook); // da xong, da test
router.post("/findbooks", bookController.findBook); // da xong, da test
router.get("/getallbookmanage", bookController.getallBookManage); // da xong, da test
router.post("/getfilterbook", bookController.getFilterbook); // da xong, da test



router.post("/createorder", orderController.createOrder); // da xong, da test
router.get("/getallorder", orderController.getAllOrder); // da xong, da test
router.post("/setstateorder", orderController.setStateOrder); // da xong, da test
router.post("/findorder", orderController.findOrder); // da xong, da test
router.post("/removeorder", orderController.removeOrder); // da xong, da test
module.exports = router;
