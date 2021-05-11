import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import fs from 'fs';
import products from './data/products.js';
import connectDB from './config/db.js';

// routes import
import productRoute from './routes/productRoute.js';
import { errorHandler, notFound } from './middlewares/errorMiddlware.js';

// env
dotenv.config();

// app
const app = express();

// db
connectDB();

// router
app.use('/api/products', productRoute);

// error middleware
app.use(notFound);
app.use(errorHandler);

// port
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log('server running on port 8000'.yellow.bold));
