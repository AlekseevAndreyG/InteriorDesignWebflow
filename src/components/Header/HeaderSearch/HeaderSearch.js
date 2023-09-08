import React, { Component } from "react";
import { BiSearch } from "react-icons/bi";
import "./HeaderSearchStyle.css";

class HeaderSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  handleIconClick = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { isExpanded } = this.state;

    return (
      <div className={`Search`}>
        <BiSearch
          className={`search_icon ${isExpanded ? "active_click" : ""}`}
          onClick={this.handleIconClick}
        />
        <input
          type="text"
          placeholder="Search"
          className={`expanded_input ${
            isExpanded ? "expanded_input_open" : "expanded_input_close"
          }`}
        />
      </div>
    );
  }
}

export default HeaderSearch;
