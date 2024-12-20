const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

//public routes

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);

//protected routes

authRouter.get('/me',auth.checkAuth ,authController.me);
authRouter.post('/logout',auth.checkAuth ,authController.logout);

module.exports = authRouter;        