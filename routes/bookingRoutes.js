import { Router } from 'express';
import bookingController from '../controllers/bookingController.js';
import auth from '../middlewares/auth.js';
const bookingRouter = Router();

bookingRouter.post('/', auth.checkAuth, bookingController.createBooking);

bookingRouter.get('/', auth.checkAuth, auth.allowRoles(['admin']), bookingController.getAllBookings);
bookingRouter.get('/:id', auth.checkAuth, auth.allowRoles(['admin']), bookingController.getBookingByID);
bookingRouter.put('/:id', auth.checkAuth, auth.allowRoles(['admin']), bookingController.updateBooking);
bookingRouter.delete('/:id', auth.checkAuth, auth.allowRoles(['admin']), bookingController.deleteBooking);

 

export default bookingRouter;