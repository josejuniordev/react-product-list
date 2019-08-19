import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchSingleProduct } from '../ducks/products';
import { withRouter } from 'react-router-dom';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function ProductDetailsPage(
  {
    products,
    callFetchSingleProduct,
    match
  }
) {

  useEffect(()=> {
    callFetchSingleProduct(match.params.id);
    return () => {

    }
  }, []);
  return (
    <Fragment>
      <p>Detalhe do produto</p>
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    </Fragment>
  )
}

export default connect(
  ({ products }) => {
    return {
      products,
    }
  },
  dispatch => {
    return {
      callFetchSingleProduct(id) {
        dispatch(fetchSingleProduct(id))
      }
    }
  }
)(
  withRouter(
    ProductDetailsPage
  )
);
