import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}
      initialCenter={
        // at some point well need a if else statement to determine if the user is in SF or SEA
        {
          lat: 47.606209,
          lng: -122.332069
        }
      }>
 
        <Marker />
            <div>
            </div>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAn5YoCXYd9uiuQdoQDb8Z5-b1DFAjPbao'
})(MapContainer)


