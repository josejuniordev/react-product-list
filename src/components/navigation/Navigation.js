import React, { memo, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from "../button/Button";
import CompareIcon from "../icons/CompareIcon";
import CloseIcon from "../icons/CloseIcon";
import {appPrefix} from "../../constants/settings";
import { connect } from 'react-redux';

const menuClassName = `${appPrefix}menu`;
function Navigation(
  {
    open = false,
    onClose = () => {},
    departments,
  }
) {
  const [showAllDepartments, setShowAllDepartments] = useState(false);

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
  };

  const showAllDepartmentsHandler = () => {
    setShowAllDepartments(true);
  };

  const generateDynamicLinks = () => {
    let filteredDepartments = departments.data;

    if (!showAllDepartments) {
      filteredDepartments = departments.data.filter(department => {
        return department.FlagMenu;
      })

    }

    return filteredDepartments
      .map(departament => {
        return (
          <li key={departament.IdDepartamento} className={`${menuClassName}__main-navigation-item`}>
            <a href="#" className={`${menuClassName}__main-navigation-link`}>
                <span className={`${menuClassName}__main-navigation-icon`}>
                  <CompareIcon />
                </span>
              <span className={`${menuClassName}__main-navigation-label`}>{departament.Nome}</span>
            </a>
          </li>
        );
      });
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
        <ul className={`${menuClassName}__main-navigation`}>
          <li className={`${menuClassName}__main-navigation-item`}>
            <a href="#" className={`${menuClassName}__main-navigation-link`}>
              <span className={`${menuClassName}__main-navigation-label`}>Home</span>
            </a>
          </li>
          <li className={`${menuClassName}__main-navigation-item`}>
            <h3 className={`${menuClassName}__main-navigation-title`}>Compre por departamentos</h3>
          </li>

          {generateDynamicLinks()}

          {
            departments.data.length && !showAllDepartments
              && (
                <li className={`${menuClassName}__main-navigation-sticky-item`}>
                  <Button onClick={showAllDepartmentsHandler} block type='secondary' label='Veja todos os departamentos' />
                </li>
              )
          }
        </ul>
      </section>
      <div className={backdropClassNames}></div>
    </Fragment>
  )
}

Navigation.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default connect(
  ({departments}) => {
    return {
      departments,
    }
  }
)(memo(Navigation));
