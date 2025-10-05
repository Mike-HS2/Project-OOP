import React from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import ScanProduct from './components/ScanProduct';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Convenience Store Inventory</h1>
      <AddProduct />
      <ScanProduct />
      <ProductList />
    </div>
  );
}

export default App;
