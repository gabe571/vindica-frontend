import React, { Component } from 'react'
import Review from './Review'
import Form from './Form'
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

addReview = (review) => {
  fetch('http://localhost:3000/reviews',{
      method: "POST",
      headers: {
          "Content-Type" : "application/json",
          Accept: "application/json",
          Authorization: `bearer ${localStorage.token}`
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
    return (
      <div className="review-grid">
        <NavBar />
        <h5>WHAT OUR MEMBERS ARE SAYING!</h5>
         <ul className="review-cards">
      {
        this.state.reviews.map(review => <Review key={review.id} review={review}/>)
      }  
       <Form addReview={this.addReview} review={this.handleSubmit} />
    </ul>
      </div>
    )
  }
}

