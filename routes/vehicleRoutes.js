import { Router } from 'express';
import vehicleController from '../controllers/vehicleController.js';
import auth from '../middlewares/auth.js';

const vehicleRouter = Router();

//public routes
vehicleRouter.get('/', vehicleController.getAllVehicles);
vehicleRouter.get('/:id', vehicleController.getVehicleById);

//protected routes & admin routes

vehicleRouter.post('/', auth.checkAuth ,auth.allowRoles(['admin']) ,vehicleController.createVehicle);
vehicleRouter.put('/:id',auth.checkAuth ,auth.allowRoles(['admin']) ,vehicleController.updateVehicle);
vehicleRouter.delete('/:id',auth.checkAuth ,auth.allowRoles(['admin']) ,vehicleController.deleteVehicle);


export default vehicleRouter;