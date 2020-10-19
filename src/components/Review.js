import React from 'react'



class Review extends React.Component {

handleNameEdit = (event) => {
    this.setState ({
        name: event.target.value
    })
}

handleReviewEdit = (event) => {
    this.setState ({
        reviewed_coffee: event.target.value
    })
}

handleRatingEdit = (event) => {
    this.setState ({
        rating: event.target.value
    })
}

handleShowForm = () => {
    this.setState({edit: false})
}

addReview = () => {
    return {coffee_shop_name: this.state.coffee_shop_name }
}

render() {
    console.log(this.props.review)
    return (
    <div className="review-card">
    <div className="Review">Coffee Shop: {this.props.review.coffee_shop_name}</div>
    <div className="Review">Review: {this.props.review.reviewed_coffee}</div>
    <div className="Review">User: {this.props.review.user_username}</div><div className="Review">Stars: {this.props.review.rating}</div>

    </div>
        )
    }
}

export default Review;