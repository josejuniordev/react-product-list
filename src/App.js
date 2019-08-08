import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Suspense, lazy } from 'react';
import {fetchProducts} from "./ducks/products";
import {fetchDepartments} from "./ducks/departments";
import Navigation from './components/navigation/Navigation';
import Button from "./components/button/Button";

const ProductsListPage =  lazy(() => import("./pages/ProductsListPage"));
const ProductDetailsPage =  lazy(() => import("./pages/ProductDetailsPage"));

function App(
  {
    callFetchProducts,
    callFetchDepartments,
  }
) {
  const selectedLink = window.location.pathname.replace('/', '') || 'home';
  const [initialized, setInitialized] = useState(false);
  const [isNavigationOpen, setIsNavigationOpenTo] = useState(false);

  useEffect(() => {
    if (!initialized) {
      initialize();
    }
  }, [initialized]);

  const initialize = () => {
    callFetchProducts();
    callFetchDepartments();
    setInitialized(true);
  }

  const openNavigation = () => {
    setIsNavigationOpenTo(true);
  };

  const closeNavigation = () => {
    setIsNavigationOpenTo(false);
  };

  return (
    <BrowserRouter basename="">
      <Button label='abrir menu' onClick={openNavigation} />
      <Link to={`${process.env.PUBLIC_URL}/product-detail`}><span>Produto específico</span></Link>
      <Suspense
        fallback={<p>carregando...</p>}
      >
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={() => <ProductsListPage appInitialized={initialized} />} />
          <Route exact path={`${process.env.PUBLIC_URL}/product-detail`} component={() => <ProductDetailsPage appInitialized={initialized} />} />
        </Switch>
      </Suspense>
      <Navigation onClose={closeNavigation} open={isNavigationOpen} />
    </BrowserRouter>
  );
}

const connectedApp = connect(
  ({products, departments}) => {
    return {
      products,
      departments,
    }
  },
  dispatch => {
    return {
      callFetchProducts() {
        dispatch(fetchProducts());
      },
      callFetchDepartments() {
        dispatch(fetchDepartments());
      }
    }
  }
)(App);

export default connectedApp;
