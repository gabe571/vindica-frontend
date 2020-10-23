import React from 'react'
import NavBar from './NavBar'
import coffeecup from './coffeecup.png'

class Review extends React.Component {

    
render() {
    // console.log(this.props)
    return (
<div className="review-container">
        <div className="review-card"> 
            <div className="review">Cafe: {this.props.review.coffee_shop_name}</div>
                <div className="review">Review: {this.props.review.reviewed_coffee}</div>
                    <div className="review">User: {this.props.review.user_username}</div>
                         <div className="review">Stars: {this.props.review.rating}
                         </div>
                    </div>
                 </div>
        )
    }
}


export default Review;