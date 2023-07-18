const router = require("express").Router();

const authControllers = require("../controllers/authController");
const SiteController = require("../controllers/siteController");

router.get("/", SiteController.index);

router.post("/signup", authControllers.registerUser);
router.post("/signin", authControllers.loginUser);
router.post("/reset-password", () => {
  "";
});

module.exports = router;
