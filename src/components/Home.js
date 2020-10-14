import React, { Component } from 'react'
import MapContainer  from '../containers/MapContainer'
import FavoritesContainer  from '../containers/FavoritesContainer'
import Form from './Form'
import Cafe from './Cafe'

class Home extends React.Component {


    render() {
        return (
               <div className="home">
                   <FavoritesContainer />
                   <MapContainer />
                   <Form />
           </div>
        )
}
}

export default Home