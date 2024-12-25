const express=require('express');
const authRouter=require('./routes/authRoutes');
const logger=require('./utils/logger');
const cookieParser=require('cookie-parser');
const vehicleRouter=require('./routes/vehicleRoutes');
const unknownEndpoint=require('./utils/Error');
const bookingRouter=require('./routes/bookingRoutes');
const userRouter=require('./routes/userRoutes');
const cors=require('cors');

const app=express();
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));

app.use(express.json());
app.use(cookieParser());
app.use(logger);

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/vehicles',vehicleRouter);
app.use('/api/v1/bookings', bookingRouter);
app.use('/api/v1/users',userRouter);

app.use(unknownEndpoint);

module.exports=app;