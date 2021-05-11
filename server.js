import dotenv from 'dotenv';
import express from 'express';
import products from './data/products.js';

// env
dotenv.config();

const app = express();

app.get('/', (req, res) => res.send('api running'));
app.get('/api/products', (req, res) => res.json(products));
app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log('server running on port 8000'));
