import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { observer } from "mobx-react";
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import dot from './image/dot.png';

const TOKEN = 'pk.eyJ1Ijoid3Ryc3QiLCJhIjoiY2pubDFqMjZ0MDF0ajNxb3g1eGlyM3d5aCJ9.tqZN9tYGTn6AWuo2Qs2BjA';

@observer
class App extends Component {

  constructor(props) {
    super(props);
    this.getData = () => this.props.store.fetchData();
  }

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 100);
  }

  render() {
    const viewport = this.props.store.viewport;
    const store = this.props.store.buses;

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => this.props.store.updateViewport(viewport)}>
        {store.length !== 0 ? (
          store.map((bus) => <Marker key={bus.VehicleNo} latitude={bus.Latitude} longitude={bus.Longitude}>
            <img src={dot} alt="dot" className="dot" />
          </Marker>)
        ) : (<h1 className="loading-text">Loading now...</h1>)}

      </MapGL>
    );
  }
}

export default App;