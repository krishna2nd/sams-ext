import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    delete window.document.referrer;
    window.document.__defineGetter__('referrer', function() {
      return 'https://www.sams.com.mx/';
    });
    fetch('https://www.sams.com.mx/sams/home/?format=json')
      .then(response => {
        return response.json();
      })
      .then(console.log)
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return <div />;
  }
}

export default App;
