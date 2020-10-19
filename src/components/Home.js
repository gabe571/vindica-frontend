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

    addReview = (review) => {
        //fetch call?
        fetch('http://localhost:3000/reviews',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ review: review }
            ),
        })
        .then(res => res.json())
        .then(( json => {
            this.setState(prevState => ({
                reviews: [...prevState.reviews, json ]
               }))
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