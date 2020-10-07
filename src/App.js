import React, {Component} from 'react';
import './App.css';
import MapContainer from './containers/MapContainer'
import Form from './components/Form'


class App extends Component {




  render() {
    return (
      
        <div > 
          <MapContainer />
          <br></br>
          <Form />
        </div>
    );
  }
}

export default App;