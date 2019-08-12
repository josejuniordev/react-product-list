import React, { Fragment } from "react";
import { connect } from 'react-redux';
import GlobalLoader from '../components/loader/global-loader';
import { BrowserRouter } from 'react-router-dom';

function ProductsListPage(
  {
    products,
    departments,
  }
) {
  console.log('productes', products)
  console.log('departaments', departments)

  const showLoader = products.isLoading || departments.isLoading;
  return (
    <Fragment>
      <h1>titulo 1 <a href="#" className='vv-button'>testandooo</a></h1>
      <p>Produtos</p>
      <h2>titulo 1</h2>
      <p>Produtos</p>
      <h3>titulo 1</h3>
      <p>Produtos</p>
      <h4>titulo 1</h4>
      <p>Produtos</p>
      <h5>titulo 1</h5>
      <p>Produtos</p>
      <h6>titulo 1</h6>
      <p>Produtos</p>
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
)(ProductsListPage);
