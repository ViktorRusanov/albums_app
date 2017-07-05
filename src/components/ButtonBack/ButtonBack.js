import React, { Component } from 'react';
import './ButtonBack.css';

class ButtonBack extends Component {
    constructor(props) {
        super(props)
        this.handleClickOnBack = this.handleClickOnBack.bind(this);
    }

    handleClickOnBack(e) {
        const goToAlbums = e.target.id;
        this.props.onClick(goToAlbums)
    }

    render() {
        return <button id="albumsAll"
                       onClick={this.handleClickOnBack}
                       className="ButtonBack__button">
            Вернуться в альбломы
        </button>
    }
}

export default ButtonBack;