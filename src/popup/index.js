/* global __DEVTOOLS__ __USE_GA__ __GA_ID__ */
/* eslint global-require:0 */
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import configureStore from '../state/configure';

import ReactDOM from 'react-dom';
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.min.css"
import  App  from './views/SplitterNavigator';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


const history = createHistory();
const store = configureStore({}, history);

if (__USE_GA__) {
  const ga = require('react-ga');
  ga.initialize(__GA_ID__);
}

const routes = (
  <ConnectedRouter history={history}>
    <Route path="/" component={App} />
  </ConnectedRouter>
);

class Index extends React.Component {
    render() {
      let component;
      if (__DEVTOOLS__) {
        const DevTools = require('../state/DevTools').default;
  
        component = (
          <div>
            <Provider store={store}>
              <div>
                {routes}
                <DevTools />
              </div>
            </Provider>
          </div>
        );
      } else {
        component = (
          <div>
            <Provider store={store}>
              {routes}
            </Provider>
          </div>
        );
      }
  
      return component;
    }
  }
  
  export default Index;
  