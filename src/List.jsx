import React, { Component } from 'react';

class List extends Component {
  renderList() {
    return this.props.items.map(item => (
      <li key={item.name}>{item.name}</li>
    ));
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

export default List;
