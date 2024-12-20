const express = require('express');
const vehicleController = require('../controllers/vehicleContriller');
const vehicleRouter = express.Router();

vehicleRouter.get('/', vehicleController.getAllVehicles);
vehicleRouter.get('/:id', vehicleController.getVehicleById);
vehicleRouter.post('/', vehicleController.createVehicle);
vehicleRouter.put('/:id', vehicleController.updateVehicle);
vehicleRouter.delete('/:id', vehicleController.deleteVehicle);

module.exports = vehicleRouter;