const router = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const orderController = require("../controllers/orderController");
const revenueController = require("../controllers/revenueController");
const genreController = require("../controllers/genreController");
const middlewareAuth = require("../middleware/authMiddleware");
const cloudinaryMiddleware = require("../middleware/cloudinary.middleware");

//AUTHENTICATION
router.post("/signin", authController.signin); //
router.post("/register", authController.register); //
router.post("/logout", authController.logout); //
router.post("/resetpassword", authController.resetpassword); //
router.post("/verify", authController.sendConfirmationCode); //
router.post("/verifyemailsignup", authController.verifyEmailSignUp); //
//user
router.delete(
  "/deleteuser",
  middlewareAuth.verifyToken,
  userController.deleteUser
); //
router.post("/adduser", middlewareAuth.verifyToken, userController.addUser); //
router.put("/edituser", userController.editUser); //
router.get("/getallusers", userController.getAllusers); //
router.get("/getnumberuser", userController.getNumberOfUsers); //
router.post("/getuserbyemail", userController.getUserByemail); //

//BOOK
router.post("/addbook", middlewareAuth.verifyToken, bookController.addBook); //
router.post("/editbook", bookController.editBook); //
router.put("/importbook", bookController.importBook); //
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
  // middlewareAuth.verifyToken,
  orderController.createOrder
); //
router.put("/setstateorder", orderController.setStateOrder); //
router.post("/findorder", orderController.findOrder); //
router.delete("/removeorder", orderController.removeOrder); //

//revenue
router.post("/findrevenue", revenueController.findRevenue); //
router.post("/findrevenuebydate", revenueController.findRevenue); //
router.get("/findyear/:year", revenueController.findByYear); //
router.post("/upload-image", cloudinaryMiddleware.uploadImage);

//revenue
router.get("/getgenre/:name", genreController.getGenre); //
router.post("/addgenre/", genreController.addGenre); //
router.put("/editgenre/:name", genreController.editGenre); //
router.get("/deletegenre/:name", genreController.deleteGenre); //
router.post("/getallgenres", genreController.getAllGenres);

module.exports = router;
