/* global chrome  */
import React from 'react';
import ReactDOM from 'react-dom';
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.min.css"
import App from './views/index';
ReactDOM.render(
  <App ></App>,
  //document.body
  document.getElementById('application')
);
