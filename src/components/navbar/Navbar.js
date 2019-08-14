import React, { memo, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from "../button/Button";
import {appPrefix} from "../../constants/settings";
import HamburgerIcon from '../icons/HamburgerIcon';
import CompareIcon from '../icons/CompareIcon';

const navbarClassName = `${appPrefix}navbar`;
function Navbar(
  {
    onToggleButtonClick = () => {},
    actionButtons = []
  }
) {

  const onToggleButtonClickHandler = (ev) => {
    ev.preventDefault();
    onToggleButtonClick();
  };

  return (
    <Fragment>
      <header className={navbarClassName}>
        <div className={`${navbarClassName}__body`}>
          <Button onClick={onToggleButtonClickHandler} type='primary' icon={<HamburgerIcon />} />
          <div className={`${navbarClassName}__side-actions`}>
            <Button onClick={onToggleButtonClickHandler} type='primary' icon={<CompareIcon />} />
            <Button onClick={onToggleButtonClickHandler} type='primary' icon={<CompareIcon />} />
            <Button onClick={onToggleButtonClickHandler} type='primary' icon={<CompareIcon />} />
          </div>
        </div>
      </header>
      {
        actionButtons.length
          && (
            <div className={`${navbarClassName}__action-buttons`}>
              {actionButtons}
            </div>
          )
      }
    </Fragment>
  )
}

Navbar.propTypes = {
  onToggleButtonClick: PropTypes.func,
  actionButtons: PropTypes.arrayOf(PropTypes.element),
};

export default memo(Navbar);
