import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
            <ul>
              <li><a href="#">Meus pedidos</a></li>
              <li><a href="#">Minha conta</a></li>
            </ul>
          </nav>
        </header>

      </section>
      <div className="vv-backdrop"></div>
    </Fragment>
  )
}

Navigation.propTypes = {
};

export default memo(Navigation);
