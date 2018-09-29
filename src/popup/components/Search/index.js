import React, { Component } from 'react';
import { SearchInput } from 'react-onsenui';
import './index.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <div>
        <SearchInput
          className="product-search"
          value={this.state.text}
          onChange={event => {
            this.setState({ text: event.target.value });
          }}
          placeholder="Search for some product"
        />
      </div>
    );
  }
}

export default Search;
