const mongoose = require('mongoose');
const{MONGODB_URI} = require('./utils/config');
const app = require('./app');

mongoose.set('strictQuery', false);//sum error

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running @ http://localhost:3000');
    });
    
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


