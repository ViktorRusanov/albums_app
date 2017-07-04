import axios from 'axios';

export default {
    listAlbums() {
        return axios.get('https://jsonplaceholder.typicode.com/albums');
    },
    listPhotos() {
        return axios.get('https://jsonplaceholder.typicode.com/photos');
    }
};