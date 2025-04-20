import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  onSelectType = (eventKey) => {
    this.setState({ type: eventKey });
  };

  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = this.state.type === "all" || item.type.toLowerCase() === this.state.type;
    return matchesSearch && matchesType;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        <DropdownButton id="typeDropdown" title="Filter by Type">
          <MenuItem eventKey="all" onSelect={this.onSelectType}>All</MenuItem>
          <MenuItem eventKey="fruit" onSelect={this.onSelectType}>Fruit</MenuItem>
          <MenuItem eventKey="vegetable" onSelect={this.onSelectType}>Vegetable</MenuItem>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
