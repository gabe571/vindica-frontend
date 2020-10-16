import React from 'react';
import Reviews from './Reviews'

const ReviewsContainer = (props) => {

    return (
      <ul className="reviewcards">
        {
          props.reviews.map(review => <Reviews key={review.id} review={review} delete={props.delete} edit={props.edit}/>)
        }  
      </ul>
    )
  };
  export default ReviewsContainer;