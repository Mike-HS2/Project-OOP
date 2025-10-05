class Sale {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        this.total = product.price * quantity;
        this.timestamp = new Date();
    }
}

module.exports = Sale;
