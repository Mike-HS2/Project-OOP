import React, { useEffect, useState } from 'react';
import axios from '../services/api';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get('/products');
      setProducts(res.data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.quantity} in stock</li>
        ))}
      </ul>
    </div>
  );
}
