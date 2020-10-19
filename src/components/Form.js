import React, { Component } from 'react'


class Form extends React.Component {
 
    state = {
        coffee_shop_name: ''
    }
handleName = (event) => {
    this.setState ({
        coffee_shop_name: event.target.value
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
    console.log(e)
    const coffee_shop_name = this.state.coffee_shop_name
   this.props.reviews(coffee_shop_name)
}
render() {
    return (
    <div>
            <form onSubmit={this.handleAddReview}>
                <div>
                    <div>
                    <label>CoffeeShop</label>
                    <input value={this.state.coffee_shop_name} onChange={this.handleName} />
                    {/* </div>
                    <label>Review</label>
                    <textarea value={this.state.content} onChange={this.handleReviewContent} />
                    <div>
                    <label>Rating</label>
                    <input value={this.state.rating} onChange={this.handleRating} /> */}
                    </div>
                </div>
                <button type="submit">Create Review!</button>
            </form >
        
    </div>
)
}
}
export default Form;