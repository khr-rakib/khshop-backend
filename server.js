import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';

// routes import
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoutes.js';
import orderRoute from './routes/orderRoutes.js';
import uploadRoute from './routes/uploadRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddlware.js';

// env
dotenv.config();

// app
const app = express();

// db
connectDB();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// router
app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);
app.use('/api/upload', uploadRoute);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.get('/api/config/paypal', (req, res) => {
  return res.send(process.env.PAYPAL_CLIENT_ID);
});

// error middleware
app.use(notFound);
app.use(errorHandler);

// port
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log('server running on port 8000'.yellow.bold));
