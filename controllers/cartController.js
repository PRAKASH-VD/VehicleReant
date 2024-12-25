import User from '../models/user.js';

const cartController = {
    addToCart: async (req, res) => {
        // get the vehicle id from the request body
        const { vehicleId, quantity } = req.body;

        // get the user from the request object
        const userId = req.userId;

        // get the user from the database
        const user = await User.findById(userId);

        // check if the vehicle is already in the cart
        const vehicleIndex = user.cart.findIndex(item => item.vehicle == vehicleId);

        // if the vehicle is not in the cart
        if (vehicleIndex === -1) {
            user.cart.push({ vehicle: vehicleId, quantity });
        } else {
            // if the vehicle is already in the cart
            user.cart[vehicleIndex].quantity += quantity;
        }

        // save the user
        await user.save();

        // send a response
        res.json({ message: 'vehicle added to cart' });
    }
}

export default cartController;