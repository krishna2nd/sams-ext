/*global chrome*/
import React, { Component } from 'react';
import { Carousel, CarouselItem, Page, Toolbar, Button, AlertDialog, Dialog } from 'react-onsenui'
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    chrome.storage.sync.get('color', data => {
      this.setState({
        color: data.color
      });
    });
  }
  onChangeColour = element => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs)  => {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.body.style.backgroundColor = "' + this.state.color + '";'
      });
    });
  };
  render() {
    return (
      <div style={{width:300,height:200}} >
        <h1>Sams club</h1>
        <Button
          id="changeColor"
          modifier="large--cta"
          onClick={this.onChangeColour}
        >Click to See the change</Button>
      </div>
    );
  }
}
