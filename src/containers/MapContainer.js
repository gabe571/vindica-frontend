import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import mapStyles from './mapStyles';

export class MapContainer extends Component {

  render() {

    const mapStyles = {
      width: "60%",
      height: "75%",
      margin: "250px"
    };

    return (
    
      
      <Map google={this.props.google} 
      zoom={14}
      style={mapStyles}
      initialCenter={
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


