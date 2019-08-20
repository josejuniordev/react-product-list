import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

describe('App Component', () => {
  test('Should render correctly', () => {
    const rendered = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(rendered).toMatchSnapshot();
  })
});
