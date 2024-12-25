import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String,
    stock: Number,
    // rating: Number,
    // reviews: Number,
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }      
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema, 'vehicles');

export default Vehicle;
