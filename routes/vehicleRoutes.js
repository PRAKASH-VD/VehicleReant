const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const auth = require('../middlewares/auth');
const vehicleRouter = express.Router();

//public routes
vehicleRouter.get('/', vehicleController.getAllVehicles);
vehicleRouter.get('/:id', vehicleController.getVehicleById);

//protected routes & admin routes

vehicleRouter.post('/', auth.checkAuth ,auth.allowRoles(['admin']) ,vehicleController.createVehicle);
vehicleRouter.put('/:id',auth.checkAuth ,auth.allowRoles(['admin']) ,vehicleController.updateVehicle);
vehicleRouter.delete('/:id',auth.checkAuth ,auth.allowRoles(['admin']) ,vehicleController.deleteVehicle);

module.exports = vehicleRouter;