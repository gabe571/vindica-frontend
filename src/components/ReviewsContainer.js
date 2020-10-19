import React from 'react';
import Review from './Review'


  const ReviewsContainer = (props) => {

    return (
      <div>
      <ul className="cards">
        {
          props.reviews.map(review => <Review key={review.id} review={review} />)
        }  
      </ul>
      </div>
    )
  };
  export default ReviewsContainer;