import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';

// routes import
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoutes.js';
import orderRoute from './routes/orderRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddlware.js';

// env
dotenv.config();

// app
const app = express();

// db
connectDB();

// middlewares
app.use(express.json());

// router
app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);

// error middleware
app.use(notFound);
app.use(errorHandler);

// port
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log('server running on port 8000'.yellow.bold));
