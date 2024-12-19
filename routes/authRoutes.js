const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');


authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/me',auth.checkAuth ,authController.me);
authRouter.post('/logout', authController.logout);

module.exports = authRouter;        