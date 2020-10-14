import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {

  state = {
    pins:[],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: "",
    display_address:"",
    display_phone:"",
    url:"",
    rating:"",
  };


  componentDidMount() {
    fetch("http://localhost:3000/search")
    .then(resp => resp.json())
    .then(pins => this.setState({ pins: pins.businesses }))
  }
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      display_phone: props.display_phone,
      display_address: props.display_address,
      selectedPlace: props.name,
      url: props.url,
      rating: props.rating,
      activeMarker: marker,
      showingInfoWindow: true
    });

  makePins = () => {
    return this.state.pins.map(pin => {
      return (<Marker onClick={this.onMarkerClick}
         key={pin.id} pin={pin} 
        position={{ lat: pin.coordinates.latitude, lng: pin.coordinates.longitude }} name={pin.name} display_phone={pin.display_phone} display_address={pin.location.display_address} url={pin.url} rating={pin.rating}
      />)
    })
  }
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
 
  render() {
    console.log(this.state.pins)
    return (
      <Map
      initialCenter={
        {
          lat: 47.606209,
          lng: -122.332069
        }} 
      google={this.props.google}
      style={{width: 500, height: 500, }}
          onClick={this.onMapClicked}>
            {this.makePins()}
        <InfoWindow 
        display_address0={this.state.display_address}
        display_phone={this.state.display_phone}
         selectedPlace={this.state.selectedPlace}
         url={this.state.url}
         rating={this.state.rating}
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}
         onClose={this.onClose}>
            <div>
              <h5>{this.state.selectedPlace}</h5>
              <h5>{this.state.display_address}</h5>
              <h5>Phone #:{this.state.display_phone}</h5>
              <h5>{this.state.url}</h5>
              <h5>{this.state.rating} Stars</h5>
            </div>
        </InfoWindow>
        
      </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAn5YoCXYd9uiuQdoQDb8Z5-b1DFAjPbao'
})(MapContainer)

