import React, { Component } from 'react'
import Review from './Review'
import NavBar from './NavBar'

export default class ReviewsContainer extends Component {

  state = {
    reviews: [],
}

componentDidMount(){
fetch('http://localhost:3000/reviews')
.then(res => res.json())
.then(reviews => this.setState({ reviews }))
}

  render() {
    return (
      <div>
        <NavBar />
         <ul className="review-cards">
      {
        this.state.reviews.map(review => <Review key={review.id} review={review}/>)
      }  
    </ul>
      </div>
    )
  }
}

