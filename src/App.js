import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
// import { observable, computed, action } from 'mobx';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import Axios from 'axios';
import dot from './image/dot.png';

const TOKEN = 'pk.eyJ1Ijoid3Ryc3QiLCJhIjoiY2pubDFqMjZ0MDF0ajNxb3g1eGlyM3d5aCJ9.tqZN9tYGTn6AWuo2Qs2BjA';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buses: [],
      viewport: {
        latitude: 49.246292,
        longitude: -123.116226,
        zoom: 11.0,
        bearing: 0,
        pitch: 0,
        width: window.screen.width,
        height: window.screen.height,
      }
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    Axios.get('http://api.translink.ca/rttiapi/v1/buses?apikey=MPnoGgg69nVuLxE4VZwX')
      .then(response => {
        const buses = response.data;
        this.setState({ buses }, function () {
          console.log(this.state.buses);
        });
      })
  }

  render() {
    const { viewport } = this.state;
    const bus = this.state.buses;



    return (

      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}>
        {bus.length !== 0 ? (
          bus.map((bus) => <Marker key={bus.VehicleNo} latitude={bus.Latitude} longitude={bus.Longitude}>
            <div className="App"><img src={dot} alt="dot" style={{ width: "5px", height: "5px" }} /></div>
          </Marker>)
        ) : (<h1 style={{ textAlign: "center", marginTop: "30px" }}>Loading now...</h1>)}

      </MapGL>


    );
  }
}

export default App;