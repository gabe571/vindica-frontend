import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 import React from "react"
export class MapFile extends React.Component {

  render() {
    return (

      <Map 
      google={this.props.google}
      center={{
        lat: 47.606209,
        lng: -122.332069
      }}
      zoom={15}
      onClick={this.onMapClicked}
    >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAn5YoCXYd9uiuQdoQDb8Z5-b1DFAjPbao'
})(Map)