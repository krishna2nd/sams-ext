/* global $ */
import React, { Component } from 'react';
import Ons, {
  Carousel,
  CarouselItem,
  Page,
  Toolbar,
  Tabbar,
  Button,
  AlertDialog,
  Dialog,
  SplitterSide,
  Splitter,
  SplitterContent,
  List,
  ListItem,
  ListHeader,
  Icon,
  Card,
  ToolbarButton,
  BackButton,
  ListTitle,
  Input,
  Navigator,
  Tab
} from 'react-onsenui';

class PageNav1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : 'Custom Page',
      nextTitle: null
    };
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="left">
          <BackButton>Back</BackButton>
        </div>
        <div className="center">{this.state.title}</div>
      </Toolbar>
    );
  }

  pushPage() {
    this.props.navigator.pushPage({
      component: PageNav1,
      props: {
        key: 'pageNav' + this.props.navigator.routes.length,
        title: this.state.nexTitle
      }
    });
  }

  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <div style={{ textAlign: 'center' }}>
          <h1>Custom Page</h1>
          <p>
            <Input
              modifier="underbar"
              placeholder="Title"
              float
              onChange={evt => this.setState({ nexTitle: evt.target.value })}
            />
          </p>
          <Button onClick={this.pushPage.bind(this)}>Push Page</Button>
          <Button onClick={this.popPage.bind(this)}>Pop Page</Button>
        </div>
      </Page>
    );
  }
}

class Home extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({
      component: PageNav1,
      props: { key: 'pageNav1' }
    });
  }
  componentDidMount() {
    $(document).ready(function() {
      $('.owl-carousel').owlCarousel();
    });
  }

  render() {
    return (
      <Page>
        <h2>Home</h2>
        <div style={{ textAlign: 'center' }}>
          <br />
          <Button onClick={this.pushPage.bind(this)}>Push Page</Button>
          <div className="owl-carousel owl-theme">
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Home;
