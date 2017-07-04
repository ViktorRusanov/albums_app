import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props)
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
    }

    handleChangeSearch(e) {
        const searchString = e.target.value;
        this.props.onChange(searchString);
    }

    render() {
        return <input type="text"
                      value={this.props.searchString}
                      onChange={this.handleChangeSearch}
                      placeholder="Введите название альбома"
                      className="Search__input"
        />
    }
}

export default Search;