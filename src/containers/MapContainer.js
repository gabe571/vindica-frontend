import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {

  state = {
    pins:[],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  componentDidMount() {
    fetch("http://localhost:3000/search")
    .then(resp => resp.json())
    .then(pins => this.setState({ pins: pins.businesses }))
  }
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  
  makePins = () => {
    console.log(this.state.pins)
    return this.state.pins.map(pin => {
      return (<Marker 
        name={pin.name} key={pin.id} pin={pin}
        position={{ lat: pin.coordinates.latitude, lng: pin.coordinates.longitude }}
      />)
    })
  }
 
  render() {
    return (
      <Map
      initialCenter={
        {
          lat: 47.606209,
          lng: -122.332069
        }} 
      google={this.props.google}
          onClick={this.onMapClicked}>
            {this.makePins()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAn5YoCXYd9uiuQdoQDb8Z5-b1DFAjPbao'
})(MapContainer)

