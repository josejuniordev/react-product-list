export const priceSignature = {
  value: 0,
  from: 0,
  installment: 0,
  byParcel: 0,
  discounts: []
};

class Product {
  constructor(
    name,
    rating,
    image,
    price = {...priceSignature},
    id
  ) {
    this.name = name;
    this.rating = rating;
    this.image = image;
    this.price = price;
    this.id = id || +new Date();
  }
}

export default Product
