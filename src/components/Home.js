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

    addReview = (coffeeShopName, reviewedCoffee, rating, user, coffee_shop_id) => {
        //fetch call?
        fetch('http://localhost:3000/reviews',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ review: {coffee_shop_name: coffeeShopName, reviewed_coffee: reviewedCoffee, rating: rating, user_username: user, coffee_shop_id: coffee_shop_id},
            }),
        })
        .then(res => res.json())
        .then(( json => {
            console.log(json)
        }))
       this.setState(prevState => ({
        reviews: [...prevState.reviews, coffeeShopName, reviewedCoffee, rating, user]
       }))
    }
    
   
    render() {
        console.log(this.state.reviews)
        return (
               <div className="home">
                   
                    <Form addReview={this.addReview} review={this.handleSubmit}/>
                    <ReviewsContainer reviews={this.state.reviews}/>
                   <FavoritesContainer />
                   <MapContainer />
           </div>
        )
}
}

export default Home