const router = require("express").Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");


//AUTHENTICATION
router.post("/signin", authController.signin); // đã viết xong
router.post("/register", authController.register); // đã viết xong
router.post("/logout", authController.logout); // chưa viết
router.post("/resetpassword", authController.resetpassword); // chưa xong
router.post("/verify", authController.sendConfirmationCode); // chưa xong

//user
router.post("/deleteuser", userController.deleteUser); // da xong, test ok roi
router.post("/adduser", userController.addUser); // da xong, test ok roi
router.post("/edituser", userController.editUser); // da xong chua test
router.get("/getallusers", userController.getAllusers); // đã viết xong
router.get("/getnumberuser", userController.getNumberOfUsers); // đã viết xong

//BOOK
router.post("/addbook", bookController.addBook); //  da xong
router.post("/editbook", bookController.editBook); // chua viet
router.get("/getallbooks", bookController.getAllBooks); // da xong
router.delete("/deletebook", bookController.deleteBook); // da xong
router.get("/findbooks", bookController.findBook);// da xong

module.exports = router;
