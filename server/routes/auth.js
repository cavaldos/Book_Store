const authControllers = require('../controllers/authControllers');

const router = require('express').Router();

router.post('/register',authControllers.registerUser);
router.post('/login',authControllers.loginUser);
module.exports = router;