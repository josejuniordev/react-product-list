import React, { Fragment, useEffect } from "react";
import { connect } from 'react-redux';
import GlobalLoader from '../components/loader/global-loader';
import { BrowserRouter, withRouter } from 'react-router-dom';
import ProductsList from '../components/products/ProductsList';

function ProductsListPage(
  {
    products,
    departments,
    historyHandler = () => ({}),
    history
  }
) {

  useEffect(() => {
    console.log('historyHandler', historyHandler)
    historyHandler(history);
  }, []);

  const showLoader = products.isLoading || departments.isLoading;
  return (
    <Fragment>
      <ProductsList products={products.data} />
      <GlobalLoader show={showLoader} />
    </Fragment>
  )
}

export default connect(
  ({ products, departments }) => {
    return {
      products,
      departments,
    }
  }
)(
  withRouter(ProductsListPage)
);
