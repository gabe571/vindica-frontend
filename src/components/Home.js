import React from 'react'
import MapContainer  from '../containers/MapContainer'
import FavoritesContainer  from './FavoritesContainer'
import ReviewsContainer  from './ReviewsContainer'
import Form from './Form'


class Home extends React.Component {


    render() {
        return (
               <div className="home">
                    <Form />
                    <ReviewsContainer />
                   <FavoritesContainer />
                   <MapContainer />
           </div>
        )
}
}

export default Home