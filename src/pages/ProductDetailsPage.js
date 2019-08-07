import React, { Fragment } from "react";
import { connect } from 'react-redux';

function ProductDetailsPage(
  {
    products,
    departments,
  }
) {
  return (
    <Fragment>
      <p>Detalhe do produto</p>
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
)(ProductDetailsPage);
