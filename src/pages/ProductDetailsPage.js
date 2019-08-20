import React, { Fragment, useEffect } from "react";
import { connect } from 'react-redux';
import GlobalLoader from '../components/loader/global-loader';
import { withRouter } from 'react-router-dom';
import ProductDetails from '../components/products/ProductDetails';

function ProductDetailsPage(
  {
    products,
    departments,
    historyHandler = () => ({}),
    history,
  }
) {

  useEffect(() => {
    historyHandler(history);
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
