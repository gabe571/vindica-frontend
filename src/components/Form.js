import React, { Component } from 'react'



class Form extends React.Component {
 
    state = {
        coffee_shop_name: "",
        reviewed_coffee:  "",
        rating: 0,
    }

handleName = (event) => {
    this.setState ({
        coffee_shop_name: event.target.value
    })
}
    
handleReviewedCoffee = (event) => {
    this.setState ({
        reviewed_coffee: event.target.value
     })
}

handleRating = (event) => {
    this.setState ({
        rating: event.target.value
     })
}

handleForm = (e) => {
    e.preventDefault()
    console.log(e)
    const coffee_shop_name = this.state.coffee_shop_name
    const reviewed_coffee = this.state.reviewed_coffee
    const rating = this.state.rating
   this.props.addReview(coffee_shop_name, reviewed_coffee, rating)
}
render() {
    console.log(this.handleForm)
    return (
    <div>
            <form onSubmit={(e) => {this.handleForm(e)}}>
                <div>
                    <div>
                    <label>CoffeeShop</label>
                    <input value={this.state.coffee_shop_name} onChange={this.handleName} />
                    </div>
                    <label>Review</label>
                    <textarea value={this.state.reviewed_coffee} onChange={this.handleReviewedCoffee} />
                    <div>
                    <label>Rating</label>
                    <input value={this.state.rating} onChange={this.handleRating} />
                    </div>
                </div>
                <button type="submit">Create Review!</button>
            </form> 
        
    </div>
)
}
}
export default Form;