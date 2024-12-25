import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    cart: {
        type: Array,
        default: [
            {
                vehicle: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Vehicle'
                  },
                  quantity: Number
            }
        ]
    }
});

const User = mongoose.model('User', userSchema, 'users');

export default User;