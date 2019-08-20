import React, { useEffect, useState } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Suspense, lazy } from 'react';
import { fetchProducts, fetchSingleProduct } from './ducks/products';
import { fetchDepartments } from './ducks/departments';
import Navigation from './components/navigation/Navigation';
import Button from './components/button/Button';
import Navbar from './components/navbar/Navbar';
import { appPrefix } from './constants/settings';


const ProductsListPage = lazy(() => import('./pages/ProductsListPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));

function App(
  {
    callFetchProducts,
    callFetchDepartments,
    callFetchSingleProduct,
  }
) {
  const [initialized, setInitialized] = useState(false);
  const [isNavigationOpen, setIsNavigationOpenTo] = useState(false);
  const [history, setHistory] = useState({});

  useEffect(() => {
    if (!initialized) {
      initialize();
    }
  }, [initialized]);

  const initialize = () => {
    callFetchProducts();
    callFetchDepartments();
    callFetchSingleProduct();
    setInitialized(true);
  };

  const openNavigation = () => {
    setIsNavigationOpenTo(true);
  };

  const closeNavigation = () => {
    setIsNavigationOpenTo(false);
  };

  const backButtonClickHandler = () => {
    if (history && Object.keys(history).length) {
      history.goBack();
    }
  };

  return (
    <main>
      <BrowserRouter basename="">
        <Navbar onToggleButtonClick={openNavigation} actionButtons={
          [
            <Button key={1} onClick={backButtonClickHandler} type='link' icon={<span>&#8249;</span>} label='Voltar' highlight />
          ]
        } />
        <section className={`${appPrefix}content`}>
          <Suspense
            fallback={ <p>carregando...</p> }
          >
            <Switch>
              <Route exact path={ `${ process.env.PUBLIC_URL }/` }
                     component={ () => <ProductsListPage historyHandler={setHistory} appInitialized={ initialized }/> }/>
              <Route path={ `${ process.env.PUBLIC_URL }/product/:id` }
                     component={ () => <ProductDetailsPage historyHandler={setHistory} appInitialized={ initialized }/> }/>
            </Switch>
          </Suspense>
        </section>
        <Navigation onClose={ closeNavigation } open={ isNavigationOpen }/>
      </BrowserRouter>
    </main>
  );
}

const connectedApp = connect(false,
  dispatch => {
    return {
      callFetchProducts() {
        dispatch(fetchProducts());
      },
      callFetchDepartments() {
        dispatch(fetchDepartments());
      },
      callFetchSingleProduct(id = 1) {
        dispatch(fetchSingleProduct(id))
      }
    }
  }
)(
  App
);

export default connectedApp;
