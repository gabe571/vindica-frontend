import React, { Component } from 'react'
import MapContainer  from '../containers/MapContainer'
import FavoritesContainer  from '../containers/FavoritesContainer'
import Reviews from './Reviews'
import Form from './Form'
import Cafes from './Cafes'

class Home extends React.Component {


    render() {
        return (
               <div className="home">
                    <Form />
                    <Reviews />
                   <FavoritesContainer />
                   <MapContainer />
           </div>
        )
}
}

export default Home