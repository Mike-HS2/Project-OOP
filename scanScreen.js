import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from '../services/api';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    await axios.post('/scan', { barcode: data, quantity: 1 });
    Alert.alert('Scanned', `Barcode: ${data}`);
    setScanned(false);
  };

  if (hasPermission === null) return <Text>Requesting camera permission</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={{ flex:1 }}>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={{ flex:1 }} />
    </View>
  );
}
