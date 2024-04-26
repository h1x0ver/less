var Product = /** @class */ (function () {
    function Product(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
    Product.prototype.displaProduct = function () {
        var product = document.createElement('h1');
        product.textContent = "Name: ".concat(this.name, ", Price: ").concat(this.price, ", Description: ").concat(this.description);
        document.body.appendChild(product);
    };
    return Product;
}());
var product = new Product('Asus', 111, 'sasasasasasasasqasas');
product.displaProduct();
