class Product  {
    constructor(discountValue,iva, pvp) {
        this.discount= discountValue;
        this.iva = iva;
        this.pvp= pvp;
        }

};
class AcessProduct{
    constructor(id,discountValue,iva, pvp) {
        this.id=id;
        this.discount= discountValue;
        this.iva = iva;
        this.pvp= pvp;
        }
};
class IdProduct{
    constructor(id,discountValue=0,iva=0, pvp=0) {
        this.id=id;
        this.discount= discountValue;
        this.iva = iva;
        this.pvp= pvp;
        }
};
class IdShelf{
    constructor(id,capacity=0,rentPrice=0, productId=0) {
        this.id=id;
        this.capacity= capacity;
        this.price = rentPrice;
        this.product = productId;}
};
class Shelf  {
    constructor(capacity,rentPrice, productId) {
        this.capacity= capacity;
        this.price = rentPrice;
        this.product = productId;
        }

};
class AcessShelf{
    constructor(id,capacity,rentPrice, productId) {
        this.id=id;
        this.capacity= capacity;
        this.price = rentPrice;
        this.product = productId;}
        };