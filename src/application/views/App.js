/* global chrome */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import noop from 'lodash/noop';
import flow from 'lodash/flow';

import { login, autoLogin } from 'modules/user/state';
import { getCurrentUser, getCurrentLanguage } from 'modules/user/selectors';

const stateToProps = state => ({
  user: getCurrentUser(state),
});

const actionsToProps = dispatch => ({
  onLogin: user => dispatch(login(user)),
  // autoLogin: () => dispatch(autoLogin())
});

class AppSub extends Component {
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
    return <div >Test with component</div>;
  }
}


class App extends Component {
  componentDidMount() {
    this.props.onLogin();
  }

  renderLogin() {
    //if (this.props.user) {
      return (
        <Switch>
          <Route exact path="/" component={AppSub} />
        </Switch>
      );
   // }
  }

  render() {
    return (
          <div >
            { this.renderLogin() }
          </div>
    );
  }
}

App.defaultTypes = {
  user: null,
  onLogin: noop
};

const decorators = flow([
  connect(stateToProps, actionsToProps)
]);

export default decorators(App);


