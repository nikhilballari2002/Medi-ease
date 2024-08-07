require('dotenv').config();
require('express-async-errors');//to handle errors without try catch block

const express = require('express');
const cors = require('cors');

app = express();

app.use(cors({
    origin: 'http://localhost:3000', //specifying the url to which the data is being sent to 
    credentials: true//specifying this to set cookies on the frontend
}));//using cors 

const connectDB = require('./connectDB/connect');
const authRoutes = require('./routes/authRoutes');
const notFoundMiddlware = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');
//Importing all required files 

app.use(express.json());//to be able to send json objects

app.use('/api/auth',authRoutes);
app.use(errorHandlerMiddleware);//route to handle all errors
app.use(notFoundMiddlware);//route to handle non-existent routes

const PORT = process.env.PORT || 3001;//setting up the backend port

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to MongoDB database');
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
//starting the server