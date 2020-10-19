import React from 'react';
import Review from './Review'

class ReviewsContainer extends React.Component {


render() {
  // console.log(this.state.reviews)
    return (
      <div className="review-title"> What are memebers are saying!
      <ul className="reviewcards">
        {
          this.props.reviews.map(review => <Review key={review.id} review={review}  />)
        }  
      </ul>
     
     </div>
    )
  }
}
;
  export default ReviewsContainer;