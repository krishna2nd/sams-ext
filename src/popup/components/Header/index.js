import React, { Component } from 'react';
import { Page, Toolbar, BackButton, ToolbarButton, Icon } from 'react-onsenui';
import Search from '../Search';

class Header extends Component {
    render() {
        return (
            <Page renderToolbar={() =>
                <Toolbar>
                  <div className="left">
                    <BackButton>
                        Back
                    </BackButton>
                  </div>
                  <div className="center">
                    <Search ></Search>
                  </div>
                  <div className="right">
                    <ToolbarButton>
                      <Icon icon="md-menu" />
                    </ToolbarButton>
                  </div>
                </Toolbar> }
              />
        );
    }
}

export default Header;