/* global chrome */
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
        var port = chrome.extension.connect({
          name: 'Sample Communication'
        });
        port.postMessage('Hi BackGround');
        port.onMessage.addListener(function(msg) {
          console.log('message recieved' + msg);
        });
        return response.json();
      })
      .then(console.log)
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <a
          onClick={e => {
            chrome.tabs.create({
              url: chrome.extension.getURL('application/index.html'),
              selected: true
            });
          }}
        >
          Click to application
        </a>
      </div>
    );
  }
}

export default App;
