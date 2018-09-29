/* global $ */
import React, { Component } from 'react';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Account from '../pages/Account';
import WishList from '../pages/WishList';
import Search from '../pages/Search';
import SmartCart from '../pages/SmartCart';

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

class PageNav2 extends React.Component {
  renderToolbar = () => {
    return (
      <Toolbar>
        <div className="left">
          <BackButton>Back</BackButton>
        </div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Card>
          <img
            src={'https://monaca.io/img/logos/download_image_onsenui_01.png'}
            alt="Onsen UI"
            style={{ width: '100%' }}
          />
          <div className="title">
            {this.props.cardTitle ? this.props.cardTitle : 'Custom Card'}
          </div>
          <div className="content">
            <div>
              <Button>
                <Icon icon="ion-thumbsup" />
              </Button>
              <Button>
                <Icon icon="ion-share" />
              </Button>
            </div>
            <List>
              <ListHeader>Bindings</ListHeader>
              <ListItem>Vue</ListItem>
              <ListItem>Angular</ListItem>
              <ListItem>React</ListItem>
            </List>
          </div>
        </Card>
      </Page>
    );
  }
}

class Cards extends React.Component {
  pushPage = (event) => {
    this.props.navigator.pushPage({
      component: PageNav2,
      props: { key: 'pageNav2', cardTitle: event.target.textContent }
    });
  }

  render() {
    return (
      <Page>
        <h2>Cards</h2>

        <ListTitle>Card List</ListTitle>
        <List>
          <ListItem onClick={this.pushPage}>Card One</ListItem>
          <ListItem onClick={this.pushPage}>Card Two</ListItem>
          <ListItem onClick={this.pushPage}>Card Three</ListItem>
        </List>
      </Page>
    );
  }
}

class AppTabbar extends React.Component {
  renderToolbar = () => {
    return (
      <Toolbar>
        <div className="left">
          <BackButton>Back</BackButton>
        </div>
        <div className="center">Sam's Club</div>
        <div className="right">
          <ToolbarButton onClick={this.props.ShowMenu}>
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  renderTabs = (navigator) => {
    return [
      {
        content: <Home key="home" navigator={this.props.navigator} />,
        tab: <Tab key="home" label="Home" icon="fa-home" />
      },
      {
        content: <Search key="search" navigator={this.props.navigator} />,
        tab: <Tab key="search" label="Search" icon="fa-search" />
      },
      {
        content: <WishList key="wishlist" navigator={this.props.navigator} />,
        tab: <Tab key="wishlist" label="Wish list" icon="fa-heart" />
      },
      {
        content: <SmartCart key="smart-cart" />,
        tab: <Tab key="smartcart" label="Cart" icon="fa-shopping-cart" />
      },
      {
        content: <Account key="account" />,
        tab: <Tab key="account" label="Account" icon="fa-user-circle" />
      },
      {
        content: <Settings key="settings" />,
        tab: <Tab key="settings" label="Settings" icon="fa-cog" />
      }
    ];
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Tabbar
          position="auto"
          index={0}
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  hide = () => {
    this.setState({ isOpen: false });
  }

  show = () => {
    this.setState({ isOpen: true });
  }

  loadPage = (page) => {
    this.hide();
    const currentPage = this.navigator.pages.slice(-1)[0]; // --- or [this.navigator.pages.length - 1]
    if (currentPage.key != page.name) {
      this.navigator.resetPage(
        { component: page, props: { key: page.name } },
        { animation: 'fade' }
      );
    }
  }

  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;
    route.props.showMenu = this.show;

    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Splitter>
        <SplitterSide
          side="right"
          width={320}
          collapse={true}
          swipeable={true}
          isOpen={this.state.isOpen}
          onClose={this.hide}
          onOpen={this.show}
        >
          <Page>
            <List>
              <ListItem
                key={Home.name}
                onClick={() => this.loadPage(Home)}
                tappable
              >
                Home
              </ListItem>
              <ListItem
                key={Cards.name}
                onClick={() => this.loadPage(Account)}
                tappable
              >
                Account
              </ListItem>
              <ListItem
                key={SmartCart.name}
                onClick={() => this.loadPage(SmartCart)}
                tappable
              >
                Smart Cart
              </ListItem>
              <ListItem
                key={WishList.name}
                onClick={() => this.loadPage(WishList)}
                tappable
              >
                WishList
              </ListItem>
              <ListItem
                key={Settings.name}
                onClick={() => this.loadPage(Settings)}
                tappable
              >
                Settings
              </ListItem>
            </List>
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Navigator
            initialRoute={{ component: AppTabbar, props: { key: 'appTabbar', ShowMenu:this.show } }}
            renderPage={this.renderPage}
            ref={navigator => {
              this.navigator = navigator;
            }}
          />
        </SplitterContent>
      </Splitter>
    );
  }
}

export default App;
