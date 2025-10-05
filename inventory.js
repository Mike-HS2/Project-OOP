const Product = require('./Product');

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productId) {
        this.products = this.products.filter(p => p.id !== productId);
    }

    findByBarcode(barcode) {
        return this.products.find(p => p.barcode === barcode);
    }

    scanProduct(barcode, quantity = 1) {
        const product = this.findByBarcode(barcode);
        if (product) {
            product.updateQuantity(quantity);
            return product;
        }
        return null;
    }
}

module.exports = Inventory;
