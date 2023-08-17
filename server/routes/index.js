const router = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const avatarController = require("../controllers/avatarController");
const paymentController = require("../controllers/payment(test)Controller");
const editprofileController = require("../controllers/editprofileController");
const coverController = require("../controllers/coverController");
const paypalController = require('../controllers/paypalController');
const orderController = require("../controllers/orderController");
const revenueController = require("../controllers/revenueController");
const middlewareAuth = require("../middleware/authMiddleware");


//AUTHENTICATION
router.post("/signin", authController.signin); // đã viết xong
router.post("/register", authController.register); // đã viết xong
router.post("/logout", authController.logout); // chưa viết
router.post("/resetpassword", authController.resetpassword); // chưa xong
router.post("/verify", authController.sendConfirmationCode); // chưa xong
router.post("/verifyemailsignup", authController.verifyEmailSignUp); // chưa xong

//SETPROFILE
router.post("/setProfilePic", avatarController.setProfilePic);
router.get("/getAvatar", avatarController.getAvatar);
router.post("/getProfile", editprofileController.getProfile);
router.post("/editProfile", editprofileController.editProfile);
router.post("/setcoverImage", coverController.setCoverPic);
router.post("/getcoverImage", coverController.getCoverPic);

//user
router.delete(
  "/deleteuser",
  middlewareAuth.verifyToken,
  userController.deleteUser
); //
router.post("/adduser", middlewareAuth.verifyToken, userController.addUser); //
router.put("/edituser",  userController.editUser); //
router.get("/getallusers", userController.getAllusers); // 
router.get("/getnumberuser", userController.getNumberOfUsers); // 
router.post("/getuserbyemail", userController.getUserByemail); // 

//BOOK
router.post("/addbook", middlewareAuth.verifyToken, bookController.addBook); //
router.post("/editbook", bookController.editBook); //
router.get("/getallbooks", bookController.getAllBooks); //
router.get("/gettopbooks", bookController.getTopBooks); //
router.delete("/deletebook", bookController.deleteBook); //
router.post("/findbooks", bookController.findBook); //
router.get("/getallbookmanage", bookController.getallBookManage); //
router.get("/getrating", bookController.getRatingBook); //
router.get("/getgenre", bookController.getGenreBook); //
router.get("/:id", bookController.getBookById); //
router.get("/search/:query", bookController.searchBook); //
//order
router.post("/getallorder", orderController.getAllOrder); //
router.post(
  "/createorder",
  middlewareAuth.verifyToken,
  orderController.createOrder
); //
router.put("/setstateorder", orderController.setStateOrder); //
router.post("/findorder", orderController.findOrder); //
router.delete("/removeorder", orderController.removeOrder); //




//STRIPE
router.get("/sendAPIStripe",paymentController.sendStripApi);




//PAYPAL
router.post('/paypal/capture', paypalController.capturePayment);




//revenue
router.post("/findrevenue", revenueController.findRevenue); //
router.post("/findrevenuebydate", revenueController.findRevenue); //
router.get("/findyear/:year", revenueController.findByYear); //
module.exports = router;
