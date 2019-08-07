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
