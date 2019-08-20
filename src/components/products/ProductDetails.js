import React, { Fragment, useEffect } from 'react';
import Rating from 'react-rating';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { currencyFormat } from '../../utility/Utils';
import { appPrefix } from '../../constants/settings';
import { connect } from 'react-redux';
import HeartIcon from '../icons/HeartIcon';
import StarIcon from '../icons/StarIcon';
import Button from '../button/Button';
import BarcodeIcon from '../../images/icons/barcode-icon.svg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function ProductDetails(
  {
    product
  }
) {

  const cardPrefix = `${appPrefix}product-full-card`;

  if (!product) {
    return null;
  }

  return (
    <Fragment>
      <article className={`${cardPrefix}`}>
        <div className={`${cardPrefix}__information`}>
          <div className={`${cardPrefix}__rating`}>
            <Rating
              emptySymbol={<StarIcon style={{color: '#ccc'}} />}
              fullSymbol={<StarIcon />}
              initialRating={product.rating.stars}
            />
            <p className={`${cardPrefix}__rating-label`}>({product.rating.quantity})</p>
          </div>
          <div className={`${cardPrefix}__id_information`}>
            {`(Cód. Item ${product.uid})`}
          </div>
        </div>

        <div className={`${cardPrefix}__details-container`}>
          <div className={`${cardPrefix}__image-slider`}>
            <Slider {...settings}>
              {product.images.map(image => {
                return (
                  <figure className={`${cardPrefix}__image-container`}>
                    <img className={`${cardPrefix}__image`} src={image} alt={product.name}/>
                  </figure>
                )
              })}
            </Slider>

            <a href='#' className={`${cardPrefix}__wish-list-icon`}>
              <HeartIcon/>
            </a>
          </div>
          <div className={`${cardPrefix}__header-and-pricing-details`}>
            <header className={`${cardPrefix}__title-container`}>
              <h3 className={`${cardPrefix}__title`}>
                {product.name}
              </h3>
            </header>

            <p className={`${cardPrefix}__price-container`}>
              <strong className={`${cardPrefix}__price-value`}>
                <small className={`${cardPrefix}__price-from`}>
                  <del>{currencyFormat(product.price.from)}</del>
                </small>
                {currencyFormat(product.price.value)}
              </strong>
              <div className={`${cardPrefix}__price-installment`}>
                {`${product.price.installment}x de ${`${currencyFormat(product.price.byParcel)}`}`}
                <Button label='ver parcelamento' type='link' highlight />
              </div>
            </p>

            <footer className={`${cardPrefix}__footer`}>
              <div className={`${cardPrefix}__discounts`}>
                {
                  product.price.discounts
                    .filter(discount => discount.active)
                    .map(discount => {
                      return (
                        <div className={`${cardPrefix}__discount-item`}>
                          <img src={BarcodeIcon} className={`${cardPrefix}__discount-icon`} alt=""/>

                          <div className={`${cardPrefix}__discount-description`}>
                            <p><strong>{currencyFormat(discount.value)}</strong> - {discount.percentage}% de desconto</p>
                            <p>em {discount.installment}x no {discount.name}</p>
                            <p>{discount.description}</p>
                          </div>
                        </div>
                      );
                    })
                }
              </div>
              <Button block type='primary' label='Comprar' highlight />
            </footer>
          </div>
        </div>
      </article>
    </Fragment>
  );
}

export default ProductDetails;
