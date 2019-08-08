import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Suspense, lazy } from 'react';
import {fetchProducts} from "./ducks/products";
import {fetchDepartments} from "./ducks/departments";
import Menu from './components/navigation/Navigation';

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

  useEffect(() => {
    if (!initialized) {
      initialize();
    }

    function initialize() {
      callFetchProducts();
      callFetchDepartments();
      setInitialized(true);
    }

  }, [initialized]);

  return (
    <BrowserRouter basename="">
      <Link to={`${process.env.PUBLIC_URL}/product-detail`}><span>Produto específico</span></Link>
      <Suspense
        fallback={<p>carregando...</p>}
      >
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={() => <ProductsListPage appInitialized={initialized} />} />
          <Route exact path={`${process.env.PUBLIC_URL}/product-detail`} component={() => <ProductDetailsPage appInitialized={initialized} />} />
        </Switch>
      </Suspense>
      <Menu />
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
