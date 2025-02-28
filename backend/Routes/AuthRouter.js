const { signup, login } = require('../Controller/AuthController');
const { signUpValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation,login);
router.post('/signup', signUpValidation,signup);


module.exports = router