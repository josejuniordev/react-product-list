import React, {Fragment, memo} from 'react';
import {connect} from "react-redux";
import classnames from 'classnames';
import PropTypes from 'prop-types';

function GlobalLoader(
  {
    show,
    message = 'carregando...',
  }
) {
  const loaderClassNames = classnames({
    'global-loader': true,
    'global-loader--show': show,
  });

  return (
    <Fragment>
      {
        show ?
          <div className={loaderClassNames}>
            <p>{message}</p>
          </div>
          : null
      }
    </Fragment>
  )
}

GlobalLoader.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
};

export default connect(
  ({ globalLoader }) => {
    return {
      globalLoader
    }
  }
)(memo(GlobalLoader));
