import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from '../services/api';

export default function InventoryScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get('/products');
      setProducts(res.data);
    }
    fetchProducts();
  }, []);

  return (
    <ScrollView>
      {products.map(p => (
        <View key={p.id} style={{ padding:10, borderBottomWidth:1 }}>
          <Text>{p.name} - {p.quantity} in stock</Text>
        </View>
      ))}
    </ScrollView>
  );
}
