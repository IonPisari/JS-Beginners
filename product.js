class Product {
    constructor (id, category, name, image, price) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.image = image;
        this.price = price;
    }
    log(product) {
        console.log(product)
    }

}
const toyota = new Product(1, "car", "toyota", `<img src="/product/toyota.jpg">`, 12000);
const renault = new Product(2, "car", "renault", `<img src="/product/renault.jpg">`, 10000);
const bmw = new Product(3, "car", "bmw", `<img src="/product/bmw.png">`, 20000);
toyota.log(toyota)
toyota.log(renault)
toyota.log(bmw)


