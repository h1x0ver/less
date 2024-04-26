class Product {
  private name : string;
  private price : number;
  private description : string;


  constructor(name : string, price : number, description : string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  displaProduct() : void {
    let product = document.createElement('h1')
    product.textContent = `Name: ${this.name}, Price: ${this.price}, Description: ${this.description}`
    document.body.appendChild(product)
  }
}

const product = new Product('Asus', 111,'sasasasasasasasqasas')

product.displaProduct();