import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Product from '../../classes/Product';
import ProductCard from './ProductCard';
import { appPrefix } from '../../constants/settings';

const productListPrefix = `${appPrefix}product-list`;


function ProductsList (
  {
    products = []
  }
) {
  return (
    <ul className={productListPrefix}>
      {
        products.map(product => {
          return (
            <li key={product.id} className={`${productListPrefix}__item`}>
              <ProductCard product={product} />
            </li>
          )
        })
      }
    </ul>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.instanceOf(Product)
  ),
};

export default memo(ProductsList);
