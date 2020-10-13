import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {

    state = {
    };

  componentDidMount() {
    fetch("http://localhost:3000/search")
    .then(resp => resp.json())
    .then(console.log)
  }

render() {
  return (
    
    <div className="map">
          <button onclick="getLocation()">GET YOUR LOCATION</button>

    <Map 
      google={this.props.google}
      zoom={15}
      initialCenter={
        {
          lat: 47.606209,
          lng: -122.332069
        }
      }
    >
    <InfoWindow>
    </InfoWindow>
  </Map>
  </div>
  );
  
}
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAn5YoCXYd9uiuQdoQDb8Z5-b1DFAjPbao'
})(MapContainer)
