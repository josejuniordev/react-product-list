import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

function Navigation() {
  const classes = classnames({
    'vv-menu': true
  });

  return (
    <div className="menu-wrapper">
      <p>teste</p>
    </div>
  )
}

Navigation.propTypes = {
};

export default memo(Navigation);
