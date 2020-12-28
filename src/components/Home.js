import React from 'react'
import MapContainer  from '../containers/MapContainer'
import NavBar from './NavBar'
import CoffeeShopsContainer  from './CoffeeShopsContainer'
import Form from './Form'

class Home extends React.Component {

    state = {
        favorites: []
    }
  
    render() {
        return (
               <div className="home">
                   <NavBar />
                   <CoffeeShopsContainer />
                   <MapContainer />
           </div>
        )
}
}

export default Home