import Vehicle from "../models/vehicle.js";

const vehicleController = {
getAllVehicles: async (req, res) => {

    try {
        const vehicles = await Vehicle.find();
        return res.status(200).json(vehicles); 
       
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
},
getVehicleById: async (req, res) => {
    try {
        const {id} = req.params;
        const vehicle = await Vehicle.findById(id).select('-__v');

        if(!vehicle){
            return res.status(404).json({message: "Vehicle not found"});
        }

        return res.status(200).json(vehicle);

    } catch (error) {
       return res.status(500).json({ message: error.message });
    }    
},
createVehicle: async (req, res) => {
    try {
        const {name, description, price, image, category, stock} = req.body;
       
        if(!name || !description || !price || !image || !category || !stock){
            return res.status(400).json({message: "All fields are required"});
        }

        const newVehicle = new Vehicle({
            name,
             description,
              price,
               image,
               category,
                stock
            });

        await newVehicle.save();

        return res.status(201).json({message: "Vehicle created successfully", newVehicle});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
},
updateVehicle: async (req, res) => {
    try {
        const {id} = req.params;
        //get the updated vehicle from the request body
        const {name, description, price, image, category, stock} = req.body;
        
        //check if the vehicle exists
        const vehicle = await Vehicle.findById(id);
        if(!vehicle){
            return res.status(404).json({message: "Vehicle not found"});
        }

        //update the vehicle
        await Vehicle.findByIdAndUpdate(id, {
            name, 
            description, 
            price, 
            image, 
            category, 
            stock, 
            updatedAt: Date.now()
        });

        return res.status(200).json({message: "Vehicle updated successfully"});

    } catch (error) {
       return res.status(500).json({ message: error.message });
    }
    
},
deleteVehicle: async (req, res) => {

    try {
        const {id} = req.params;
        
        //check if the vehicle exists
        const vehicle = await Vehicle.findById(id);

        if(!vehicle){
            return res.status(404).json({message: "Vehicle not found"});
        }

        //delete the vehicle
        await Vehicle.findByIdAndDelete(id);

        return res.status(200).json({message: "Vehicle deleted successfully"});      

    } catch (error) {
       return res.status(500).json({ message: error.message });
    }

}
}

export default vehicleController;