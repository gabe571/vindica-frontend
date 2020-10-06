import React from "react";
import Map from '../components/MapFile.js'

class MapContainer extends React.Component {

  render() {
  return(
    <Map />
  )
}
}

export default MapContainer













// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
// // let iconMarker = 
// // const mapStyles = {
// //   width: '66%',
// //   height: '85%'
// // };
// export class MapContainer extends Component {
//     state = {
//         pins: [],
//         showingInfoWindow: false,  // Hides or shows the InfoWindow
//         activeMarker: {},          // Shows the active marker upon click
//         selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
//       };
// // grabs all locations
//     componentDidMount() {
//       fetch(`https://api.yelp.com/v3/businesses/search?term=cafe&location=seattle`)
//       .then(resp => resp.json())
//       .then( pins => this.setState({pins: pins}))
//     }
//     onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   makePins = () => {
//     return this.state.pins.map(pin => {
//       return <Marker  
//         onClick={this.props.sortCard} name={pin.name} key={pin.id} pin={pin}
//         position={{ lat: pin.lat, lng: pin.lng }}
//       />
//     })
//   }
//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={5.5}
//         // style={mapStyles}
//         initialCenter={
//           // at some point well need a if else statement to determine if the user is in SF or SEA
//           {
//             lat: 42.332108,
//             lng: -122.864674
//           }
//         }
//       >
//       {this.makePins()}
//         <InfoWindow
//           selectedPlace={this.state.selectedPlace}
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//           >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//     </Map>
//     );
//   }
// }

// export default MapContainer