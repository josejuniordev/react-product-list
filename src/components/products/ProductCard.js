import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import Product from '../../classes/Product';
import { appPrefix } from '../../constants/settings';
import { currencyFormat } from '../../utility/Utils';
import Rating from 'react-rating';
import StarIcon from '../icons/StarIcon';
import HeartIcon from '../icons/HeartIcon';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';

const cardPrefix = `${appPrefix}product-card`;

function ProductCard(
  {
    product
  }
) {
  return (
    <Fragment>
      <article className={`${cardPrefix}`}>
        <figure className={`${cardPrefix}__image-container`}>
          <Link to={ `${ process.env.PUBLIC_URL }/product-detail` }>
            <img className={`${cardPrefix}__image`} src={product.image} alt={product.name}/>
          </Link>
        </figure>
        <header className={`${cardPrefix}__title-container`}>
          <h3 className={`${cardPrefix}__title`}>
            <Link to={ `${ process.env.PUBLIC_URL }/product-detail` }>
              <LinesEllipsis
                text={product.name}
                maxLine='2'
                ellipsis='...'
                trimRight
                component='span'
                basedOn='words'
              />
            </Link>
          </h3>
        </header>
        <a href='#' className={`${cardPrefix}__wish-list-icon`}>
          <HeartIcon/>
        </a>
        <p className={`${cardPrefix}__rating`}>
          <Rating
            emptySymbol={<StarIcon style={{width: '20px', height: '20px', color: '#ccc'}} />}
            fullSymbol={<StarIcon style={{width: '20px', height: '20px'}} />}
            initialRating={product.rating}
          />
        </p>
        <p className={`${cardPrefix}__price-container`}>
          <strong className={`${cardPrefix}__price-value`}>
            {currencyFormat(product.price.value)}
          </strong>
          <span className={`${cardPrefix}__price-installment`}>
            {`${product.price.installment}x de ${`${currencyFormat(product.price.byParcel)}`}`}
          </span>
        </p>
      </article>
    </Fragment>
  )
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Product)
};

export default memo(ProductCard);
