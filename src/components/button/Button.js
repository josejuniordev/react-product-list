import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {appPrefix} from "../../constants/settings";

const buttonTypes = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  link: 'link'
};

const buttonSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const buttonClassName = `${appPrefix}button`;

function Button(
  {
    label = '',
    onClick = () => {},
    type = buttonTypes.default,
    icon = null,
    highlight = false,
    block = false,
    size = buttonSizes.medium,
  }
) {
  const classes = classnames({
    [`${buttonClassName}`]: true,
    [`${buttonClassName}--is-primary`]: type === buttonTypes.primary,
    [`${buttonClassName}--is-secondary`]: type === buttonTypes.secondary,
    [`${buttonClassName}--is-link`]: type === buttonTypes.link,
    [`${buttonClassName}--is-highlighted`]: highlight !== false,
    [`${buttonClassName}--is-block`]: block !== false,
    [`${buttonClassName}--is-small`]: size === buttonSizes.small,
    [`${buttonClassName}--is-medium`]: size === buttonSizes.medium,
    [`${buttonClassName}--is-large`]: size === buttonSizes.large,
  });

  const iconClassNames = classnames({
    [`${buttonClassName}__icon`]: true,
    [`${buttonClassName}__icon--no-margin`]: !label ? true : false,
  });

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      <span className={iconClassNames}>{icon}</span>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(Object.keys(buttonTypes)),
  icon: PropTypes.element,
  highlight: PropTypes.bool,
  block: PropTypes.bool,
};

export default memo(Button);
