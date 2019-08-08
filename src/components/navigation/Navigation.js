import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from "../button/Button";
import CompareIcon from "../icons/CompareIcon";
import CloseIcon from "../icons/CloseIcon";
import {appPrefix} from "../../constants/settings";

const menuClassName = `${appPrefix}menu`;
function Navigation(
  {
    open = false,
    onClose = () => {}
  }
) {
  const classNames = classnames({
    [`${menuClassName}`]: true,
    [`${menuClassName}--is-open`]: open !== false,
  });

  const backdropClassNames = classnames({
    [`${appPrefix}backdrop`]: true,
    [`${menuClassName}__backdrop`]: true,
    [`${menuClassName}__backdrop--is-open`]: open !== false,
  });

  const onCloseHandler = (ev) => {
    ev.preventDefault();
    onClose();
  }

  return (
    <Fragment>
      <section className={classNames}>
        <header className={`${menuClassName}__header`}>
          <h2 className={`${menuClassName}__title`}>Olá Visitante</h2>
          <a href="#" className={`${menuClassName}__action-link`}>Cadastre-se</a>

          <nav className={`${menuClassName}__header-navigation`}>
            <Button type='primary' size='small' icon={<CompareIcon />} label='Meus Pedidos' />
            <Button type='primary' size='small' icon={<CompareIcon />} label='Minha Conta' />
          </nav>
          <a href="#" onClick={onCloseHandler} className={`${menuClassName}__close-link`}><CloseIcon /></a>
        </header>

      </section>
      <div className={backdropClassNames}></div>
    </Fragment>
  )
}

Navigation.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default memo(Navigation);
