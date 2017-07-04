import React, { Component } from 'react';

class ListAlbums extends Component {
    constructor(props) {
        super(props)

        this.handleClickAlbum = this.handleClickAlbum.bind(this);
    }

    handleClickAlbum(e) {
        const albumNumber = e.target.id;
        this.props.onClick(albumNumber);
    }

    render() {
        let sortAlbums = this.props.albums;
        const searchString = this.props.searchString;
        if (searchString.length > 0) {
            sortAlbums = this.props.albums.filter(album => album.title.toLowerCase().match(searchString));
        }
        return (
            <div className="Albums__ul">
                {sortAlbums.map(album =>
                    <div id={album.id}
                        className="Albums__li"
                        onClick={this.handleClickAlbum}
                        key={album.id}>
                        <div id={album.id}>Альбом № {album.id}</div>
                        <div id={album.id}>Название: {album.title}</div>
                    </div>
                )}
            </div>
        )
    }
}

export default ListAlbums;