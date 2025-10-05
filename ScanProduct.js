import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from '../services/api';

export default function ScanProduct() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    scanner.render(
      async (decodedText) => {
        await axios.post('/scan', { barcode: decodedText, quantity: 1 });
        alert(`Scanned: ${decodedText}`);
      },
      (error) => { console.warn(error); }
    );
  }, []);

  return <div id="reader" style={{ width: "500px" }}></div>;
}
