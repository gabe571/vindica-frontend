import React from 'react'
import MapContainer  from '../containers/MapContainer'
import FavoritesContainer  from './FavoritesContainer'
import ReviewsContainer  from './ReviewsContainer'
import Form from './Form'


class Home extends React.Component {

    state = {
        reviews: [],  
    }
    
    componentDidMount(){
    fetch('http://localhost:3000/reviews')
    .then(res => res.json())
    .then(reviews => this.setState({ reviews }))
    }

    addReview = (coffeeShopName, reviewedCoffee, rating) => {
       this.setState(prevState => ({
        reviews: [...prevState.reviews, coffeeShopName, reviewedCoffee, rating]
       }))
    }
    

    render() {
        console.log(this.state.reviews)
        return (
               <div className="home">
                    <Form addReview={this.addReview} reviews={this.state.reviews}/>
                    <ReviewsContainer reviews={this.state.reviews}/>
                   <FavoritesContainer />
                   <MapContainer />
           </div>
        )
}
}

export default Home