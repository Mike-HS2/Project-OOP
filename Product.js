class Product {
    constructor(id, name, price, quantity, barcode) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.barcode = barcode;
    }

    updateQuantity(amount) {
        this.quantity += amount;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    }
}

module.exports = Product;
