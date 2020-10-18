import React from 'react';
import Review from './Review'

class ReviewsContainer extends React.Component {

  state = {
    reviews: [],
}

componentDidMount(){
fetch('http://localhost:3000/reviews')
.then(res => res.json())
.then(reviews => this.setState({ reviews }))
}
render() {
  console.log(this.state.reviews)
    return (
      <div className="review-title"> What are memebers are saying!
      <ul className="reviewcards">
        {
          this.state.reviews.map(review => <Review key={review.id} review={review}  />)
        }  
      </ul>
     
     </div>
    )
  }
}
;
  export default ReviewsContainer;