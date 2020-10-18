import React, { Component } from 'react'

class Form extends React.Component {
 
    state = {
     name: '',
     reviewed_coffee:'',
     rating:'',
    } 

handleName = (event) => {
    this.setState ({
        name: event.target.value
    })
}
    
handleReviewContent = (event) => {
    this.setState ({
        content: event.target.value
     })
}

handleRating = (event) => {
    this.setState ({
        rating: event.target.value
     })
}

handleAddReview = (e) => {
    e.preventDefault()
    const reviewed_coffee = this.state.reveiewed_coffee
    // const content = this.state.content
    // const rating = this.state.rating
   this.props.review.reveiewed_coffee(reviewed_coffee)
}
render() {
    return (
    <div>
            <form onSubmit={this.handleAddReview}>
                <div>
                    <div>
                    <label>CoffeeShop</label>
                    <input value={this.state.name} onChange={this.handleName} />
                    </div>
                    <label>Review</label>
                    <textarea value={this.state.content} onChange={this.handleReviewContent} />
                    <div>
                    <label>Rating</label>
                    <input value={this.state.rating} onChange={this.handleRating} />
                    </div>
                </div>
                <button type="submit">Create Review!</button>
            </form >
        
    </div>
)
}
}
export default Form;