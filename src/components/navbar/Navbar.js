import React, { memo, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from "../button/Button";
import {appPrefix} from "../../constants/settings";
import HamburgerIcon from '../icons/HamburgerIcon';

const navbarClassName = `${appPrefix}navbar`;
function Navbar(
  {
    onToggleButtonClick = () => {},
  }
) {

  const onToggleButtonClickHandler = (ev) => {
    ev.preventDefault();
    onToggleButtonClick();
  };

  return (
    <Fragment>
      <header className={navbarClassName}>
        <Button onClick={onToggleButtonClickHandler} type='primary' icon={<HamburgerIcon />} />
      </header>
    </Fragment>
  )
}

Navbar.propTypes = {
  open: PropTypes.bool,
  onToggleButtonClick: PropTypes.func,
};

export default memo(Navbar);
