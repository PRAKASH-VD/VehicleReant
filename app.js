
const express=require('express');
const authRouter=require('./routes/authRoutes');
const vehicleRouter=require('./routes/vehicleRoutes');
const bookingRouter=require('./routes/bookingRoutes');
const logger=require('./utils/logger');
const cookieParser=require('cookie-parser');
const unknownEndpoint=require('./utils/Error');


const app=express();

app.use(express.json());
app.use(cookieParser());
app.use(logger)

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/vehicles',vehicleRouter);
app.use('/api/v1/bookings', bookingRouter);


app.use(unknownEndpoint);

module.exports=app;