import React, { Component } from 'react';
import fetchApiService from '../../api/fetchApiService';
import './Photos.css';

class Photos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: []
        };
    }

    componentDidMount() {
        fetchApiService.listPhotos()
            .then(res => {
                const photos = res.data.map(photo => photo);
                this.setState({photos: photos});
            })
            .catch(error => alert(error));
    }

    render() {
        var num = this.props.albumNumber;
        return (
            <div className="Photos__div">
                {this.state.photos.filter(photo => (photo.albumId == num))
                    .map(photo =>
                        <img id={photo.id}
                             key={photo.id}
                             src={photo.url}
                             className="Photos__img"
                        />
                    )}
            </div>
        );
    }
}

export default Photos;