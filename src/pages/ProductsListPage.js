import React, { Fragment } from "react";
import { connect } from 'react-redux';

function ProductsListPage(
  {
    products,
    departments,
  }
) {
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
    </Fragment>
  )
}

export default connect(
  ({ tasks, tags }) => {
    return {
      tasks,
      tags
    }
  }
)(ProductsListPage);
