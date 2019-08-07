import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

function Button(
  {
    label = '',
    onClick = () => {},
    type = 'default',
    icon = null,
    highlight = false,
    block = false,
  }
) {
  const classes = classnames({
    'vv-button': true,
    '--is-primary': type === 'primary',
    '--is-secondary': type === 'secondary',
    '--is-highlighted': highlight !== false,
    '--is-block': block !== false
  });

  return (
    <button onClick={onClick} className={classes}><span className="icon">{icon}</span>{label}</button>
  )
}

Button.propTypes = {

};

export default memo(Button);
