import React from 'react'

class Favorite extends React.Component {

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
        return {id: this.state.id, coffee_shop_id: this.state.coffee_shop_id, user_id: this.state.user_id, reviewed_coffee: this.state.reviewed_coffee, rating: this.state.rating }
    }
    
    render() {
        console.log(this.props)
        return (
        <div className="review-card">
        {/* <div className="favorite">{this.props.favorite.coffee_shop_id}</div> */}
        {/* <div className="Review">Review: {this.props.review.reviewed_coffee}</div>
        <div className="Review">User: {this.props.review.user_username}</div><div className="Review">Stars: {this.props.review.rating}</div> */}
        </div>
            )
        }
    }
    export default Favorite;