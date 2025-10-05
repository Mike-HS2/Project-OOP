import React, { useState } from 'react';
import axios from '../services/api';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [barcode, setBarcode] = useState('');

  const handleAdd = async () => {
    await axios.post('/product', { id: Date.now(), name, price: +price, quantity: +quantity, barcode });
    setName(''); setPrice(''); setQuantity(''); setBarcode('');
    alert('Product added!');
  }

  return (
    <div className="mb-4">
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <input placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <input placeholder="Barcode" value={barcode} onChange={e => setBarcode(e.target.value)} />
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
}
