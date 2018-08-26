/* global chrome  */
import React from 'react';
import ReactDOM from 'react-dom';
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.min.css"
import  App  from './views/SplitterOutsideNavigator';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

ReactDOM.render(
  <App ></App>,
  //document.body
  document.getElementById('application')
);
