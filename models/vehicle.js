const mongoose = require('mongoose');

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


module.exports = mongoose.model('Vehicle', vehicleSchema, 'vehicles');