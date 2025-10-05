const express = require('express');
const bodyParser = require('body-parser');
const Inventory = require('./models/Inventory');
const Product = require('./models/Product');
const Sale = require('./models/Sale');

const app = express();
const inventory = new Inventory();
const sales = [];

app.use(bodyParser.json());

// Add product
app.post('/product', (req, res) => {
    const { id, name, price, quantity, barcode } = req.body;
    const product = new Product(id, name, price, quantity, barcode);
    inventory.addProduct(product);
    res.json(product);
});

// Scan product / sell
app.post('/scan', (req, res) => {
    const { barcode, quantity } = req.body;
    const product = inventory.scanProduct(barcode, -quantity);
    if (!product || product.quantity < 0) return res.status(400).json({ error: 'Not enough stock' });
    const sale = new Sale(product, quantity);
    sales.push(sale);
    res.json(sale);
});

// Get all products
app.get('/products', (req, res) => {
    res.json(inventory.products);
});

// Get all sales
app.get('/sales', (req, res) => {
    res.json(sales);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
