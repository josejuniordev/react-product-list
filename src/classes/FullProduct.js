import Product, { priceSignature } from './Product';

export const ratingSignature = {
  stars: 0,
  quantity: 0
};

export const discountSignature = {
  active: false,
  icon: '',
  name: '',
  description: '',
  value: 0,
  installment: 0,
  percentage: 0
};

export default class FullProduct extends Product {
  constructor(
    id,
    uid,
    name,
    rating = {...ratingSignature},
    images = [],
    price = {...priceSignature}
  ) {
    super(name, rating, images[0], price, id);
    this.uid = uid;
    this.images = images;
  }
}
