/*global chrome*/
import React, { Component } from 'react';
import Ons, {
  Carousel,
  CarouselItem,
  Page,
  Toolbar,
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

} from 'react-onsenui';
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//   componentDidMount() {
//     chrome.storage.sync.get('color', data => {
//       this.setState({
//         color: data.color
//       });
//     });
//   }
//   onChangeColour = element => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs)  => {
//       chrome.tabs.executeScript(tabs[0].id, {
//         code: 'document.body.style.backgroundColor = "' + this.state.color + '";'
//       });
//     });
//   };
//   render() {
//     return (
//       <div style={{width:300,height:200}} >
//         <h1>Sams club</h1>
//         <Button
//           id="changeColor"
//           modifier="large--cta"
//           onClick={this.onChangeColour}
//         >Click to See the change</Button>
//       </div>
//     );
//   }
// }

class Settings extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Splitter+Navigator</div>
        <div className="right">
          <ToolbarButton onClick={this.showMenu.bind(this)}>
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <h2>Settings</h2>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
      </Page>
    );
  }
}

class PageNav2 extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className="left">
          <BackButton>Back</BackButton>
        </div>
        <div className="right">
          <ToolbarButton onClick={this.showMenu.bind(this)}>
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
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
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
      </Page>
    );
  }
}

class Cards extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Splitter+Navigator</div>
        <div className="right">
          <ToolbarButton onClick={this.showMenu.bind(this)}>
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage(event) {
    this.props.navigator.pushPage({
      component: PageNav2,
      props: { key: 'pageNav2', cardTitle: event.target.textContent }
    });
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <h2>Cards</h2>

        <ListTitle>Card List</ListTitle>
        <List>
          <ListItem onClick={this.pushPage.bind(this)}>Card One</ListItem>
          <ListItem onClick={this.pushPage.bind(this)}>Card Two</ListItem>
          <ListItem onClick={this.pushPage.bind(this)}>Card Three</ListItem>
        </List>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
      </Page>
    );
  }
}

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
        <div className="right">
          <ToolbarButton onClick={this.showMenu.bind(this)}>
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
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
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
      </Page>
    );
  }
}

class Home extends React.Component {
  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Splitter+Navigator</div>
        <div className="right">
          <ToolbarButton onClick={this.showMenu.bind(this)}>
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  pushPage() {
    this.props.navigator.pushPage({
      component: PageNav1,
      props: { key: 'pageNav1' }
    });
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <h2>Home</h2>
        <div style={{ textAlign: 'center' }}>
          <br />
          <Button onClick={this.pushPage.bind(this)}>Push Page</Button>
        </div>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Swipe left to open the menu!
        </p>
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
    this.loadPage = this.loadPage.bind(this);
  }

  hide() {
    this.setState({ isOpen: false });
  }

  show() {
    this.setState({ isOpen: true });
  }

  loadPage(page) {
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
    route.props.showMenu = this.show.bind(this);

    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Splitter>
        <SplitterSide
          side="right"
          width={220}
          collapse={true}
          swipeable={true}
          isOpen={this.state.isOpen}
          onClose={this.hide.bind(this)}
          onOpen={this.show.bind(this)}
        >
          <Page>
            <List>
              <ListItem
                key={Home.name}
                onClick={this.loadPage.bind(this, Home)}
                tappable
              >
                Home
              </ListItem>
              <ListItem
                key={Cards.name}
                onClick={this.loadPage.bind(this, Cards)}
                tappable
              >
                Cards
              </ListItem>
              <ListItem
                key={Settings.name}
                onClick={this.loadPage.bind(this, Settings)}
                tappable
              >
                Settings
              </ListItem>
            </List>
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Navigator
            initialRoute={{ component: Home, props: { key: Home.name } }}
            renderPage={this.renderPage.bind(this)}
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
