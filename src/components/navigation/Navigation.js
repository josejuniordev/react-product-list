import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from "../button/Button";
import CompareIcon from "../icons/CompareIcon";
import CloseIcon from "../icons/CloseIcon";

function Navigation() {
  const classes = classnames({
    'vv-menu': true
  });

  return (
    <Fragment>
      <section className="vv-menu">
        <header className="vv-menu__header">
          <h2 className="vv-menu__title">Olá Visitante</h2>
          <a href="#" className="vv-menu__action-link">Cadastre-se</a>

          <nav className="vv-menu__header-navigation">
            <Button type='primary' size='small' icon={<CompareIcon />} label='Meus Pedidos' />
            <Button type='primary' size='small' icon={<CompareIcon />} label='Minha Conta' />
          </nav>
          <a href="#" className="vv-menu__close-link"><CloseIcon /></a>

        </header>

      </section>
      <div className="vv-backdrop"></div>
    </Fragment>
  )
}

Navigation.propTypes = {
};

export default memo(Navigation);
