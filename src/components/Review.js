import React from 'react'
import NavBar from './NavBar'

class Review extends React.Component {

    
render() {
    // console.log(this.props)
    return (
<div className="review-container">
        <div className="review-card"> 
            <div className="Review">Coffee Shop: {this.props.review.coffee_shop_name}</div>
                <div className="Review">Review: {this.props.review.reviewed_coffee}</div>
                    <div className="Review">User: {this.props.review.user_username}</div>
                         <div className="Review">Stars: {this.props.review.rating}</div>
                            </div>
                            </div>
        )
    }
}


export default Review;