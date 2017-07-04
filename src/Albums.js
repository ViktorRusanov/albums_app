import React, { Component } from 'react';
import ListAlbums from './getAlbums';
import Search from './Search';
import Photos from './Photos';
import ButtonBack from './ButtonBack';
import fetchApiService from './fetchApiService';
import './Albums.css'

const ALBUMS_ALL = 'albumsAll';

class Albums extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            albumNumber: ALBUMS_ALL,
            searchString: ''
        };
        this.handleClickAlbum = this.handleClickAlbum.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleClickOnBack = this.handleClickOnBack.bind(this);
    }

    componentDidMount() {
        fetchApiService.listAlbums()
            .then(res => {
                const albums = res.data.map(obj => obj);
                this.setState({albums: albums});
            });
    }

    handleClickAlbum(newAlbumNumber) {
        this.setState({
            albumNumber: newAlbumNumber
        });
    }

    handleChangeSearch(newSearchString) {
        this.setState({
            searchString: newSearchString
        });
    }

    handleClickOnBack(goToAlbums) {
        this.setState({
            albumNumber: goToAlbums
        })
    }

    render() {
        const {albums, albumNumber, searchString} = this.state;
        if (this.state.albumNumber === ALBUMS_ALL) {
            return (
                <div className="Albums__div">
                    <Search onChange={this.handleChangeSearch}/>
                    <ListAlbums searchString={searchString}
                                albums={albums}
                                onClick={this.handleClickAlbum}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <ButtonBack onClick={this.handleClickOnBack}/>
                    <Photos albumNumber={albumNumber}/>
                </div>
            );
        }
    }
}

export default Albums;