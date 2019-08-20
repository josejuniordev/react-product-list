import React, { Fragment, useEffect } from "react";
import { connect } from 'react-redux';
import GlobalLoader from '../components/loader/global-loader';
import { BrowserRouter, withRouter } from 'react-router-dom';
import ProductDetails from '../components/products/ProductDetails';
import { fetchSingleProduct } from '../ducks/products';

function ProductDetailsPage(
  {
    products,
    departments,
    historyHandler = () => ({}),
    history,
    match,
    callFetchSingleProduct
  }
) {

  useEffect(() => {
    historyHandler(history);
    console.log('repetindo devido ao toggle do menu')
  }, []);

  const showLoader = products.isLoading;
  return (
    <Fragment>
      <ProductDetails product={products.currentInView} />
      <GlobalLoader show={showLoader} />
    </Fragment>
  )
}

export default connect(
  ({ products }) => ({
    products
  })
)(withRouter(ProductDetailsPage));
