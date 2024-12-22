const express = require('express');
const bookingController = require('../controllers/bookingController');
const bookingRouter= express.Router();
const auth = require('../middlewares/auth');

bookingRouter.get('/',auth.checkAuth,bookingController.getAllBookings);

bookingRouter.post('/',auth.checkAuth,auth.allowRoles(['user']),bookingController.createBooking);
bookingRouter.get('/:id',auth.checkAuth,auth.allowRoles(['user']) ,bookingController.getBookingById);
bookingRouter.put('/:id',auth.checkAuth,auth.allowRoles(['user']) ,bookingController.updateBooking);
bookingRouter.delete('/:id',bookingController.deleteBooking);

 

module.exports = bookingRouter;