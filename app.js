const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./Routes/productRoutes');
const mongodb = require('mongodb')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const app = express();

app.use(express.json());
app.use('/products', productRoutes);

module.exports = app;
