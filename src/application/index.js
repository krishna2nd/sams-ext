/* global chrome  */
/* global __DEVTOOLS__ __USE_GA__ __GA_ID__ */
/* eslint global-require:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.min.css';
//import App from './views/App';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import createMemoryHistory from 'history/createMemoryHistory';
import configureStore from '../store/configureStore';
//import { init } from './middlewares/socketio';

const history = createMemoryHistory();
const store = configureStore({}, history);
window.store = store;
if (__USE_GA__) {
  const ga = require('react-ga');
  ga.initialize(__GA_ID__);
}

const App = <div>TEst</div>
class Index extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Route path="/" component={App} />
          </ConnectedRouter>
        </Provider>
      );
  }
}

export default Index;

ReactDOM.render(
  <Index />,
  //document.body
  document.getElementById('application')
);
