import { observable, action } from 'mobx';
import Axios from 'axios';

class Map {
    @observable buses = [];
    @observable viewport = {
        latitude: 49.246292,
        longitude: -123.116226,
        zoom: 11.0,
        bearing: 0,
        pitch: 0,
        width: window.screen.width,
        height: window.screen.height,
    }

    @action fetchData() {
        Axios.get('http://api.translink.ca/rttiapi/v1/buses?apikey=MPnoGgg69nVuLxE4VZwX')
            .then(response => {
                this.buses = response.data;
            })
    }

    @action updateViewport(newView) {
        this.viewport = newView;
    }
}

var store = new Map();

export default store;

