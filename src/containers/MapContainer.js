import React, { Component } from 'react';
import {Map, InfoWindow,InfoWindowEx, Marker, GoogleApiWrapper} from 'google-maps-react';
import Linkify from 'react-linkify';

export class MapContainer extends React.Component {

  state = {
    favorites: [],
    pins:[],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: "",
    display_address:"",
    display_phone:"",
    url:"",
    rating:"",
    image_url:"",
  }

  send = () => {
  console.log("made it!")
  }

  componentDidMount() {
    fetch("http://localhost:3000/search")
    .then(resp => resp.json())
    .then(pins => this.setState({ pins: pins.businesses }))
  }
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      image_url: props.image_url,
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
        position={{ lat: pin.coordinates.latitude, lng: pin.coordinates.longitude }} name={pin.name} display_phone={pin.display_phone} display_address={pin.location.display_address} url={pin.url} rating={pin.rating} image_url={pin.image_url}
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
      const mapStyles = {
        width: "50%",
        height: "50%",
      };
    console.log(this.state.pins)
    return (
      <Map className="map-position"
      initialCenter={
        {
          lat: 47.606209,
          lng: -122.332069
        }} 
        style={mapStyles}
      google={this.props.google}
          onClick={this.onMapClicked}>
            {this.makePins()}
        <InfoWindow
        image_url={this.state.image_url}
        display_address0={this.state.display_address}
        display_phone={this.state.display_phone}
         selectedPlace={this.state.selectedPlace}
         url={this.state.url}
         rating={this.state.rating}
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}
         onClose={this.onClose}>
            <div className="infowindow">
            <img src={this.state.image_url} className="mapimage"></img>
              <h5>{this.state.selectedPlace}</h5>
              <h5>{this.state.display_address}</h5>
              <h5>Phone #:{this.state.display_phone}</h5>
              <Linkify>{this.state.url}</Linkify>
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
