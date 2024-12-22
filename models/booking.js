const mongoose = require('mongoose');
const vehicle = require('./vehicle');

const bookingSchema = new mongoose.Schema({
    user:{
            
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        },
        vehicle:[
            {
    vehicle:{    
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
    },
    quantity:{
        type: Number,
        required: true,
        
    }
}
 ],
    total:Number,
    status:{
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
        
        
});

module.exports = mongoose.model('Booking', bookingSchema, 'bookings');