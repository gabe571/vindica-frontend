import React, { Component } from 'react'



class Form extends React.Component {
 
    state = {
        reviewed_coffee: '',
        rating: '',
        user_username: '',
        coffee_shop_name: '',
    }

handleCoffeeShopName = (event) => {
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

handleUser = (event) => {
    this.setState ({
        user_username: event.target.value
    })
}

handleForm = (e) => {
    e.preventDefault()
    // console.log(e)
    const review = {
    coffee_shop_name: this.state.coffee_shop_name,
    reviewed_coffee: this.state.reviewed_coffee,
    rating: this.state.rating,
    user_username: this.state.user_username,
    }
    
   this.props.addReview(review)
    }
render() {
    return (
    <div>
            <form onSubmit={(e) => {this.handleForm(e)}}>
                <div>
                    <div>
                    <label>CoffeeShop</label>
                    <input type="text" value={this.state.coffee_shop_name} onChange={this.handleCoffeeShopName} />
                    </div>
                    <label>Review</label>
                    <textarea value={this.state.reviewed_coffee} onChange={this.handleReviewedCoffee} />
                    <div>
                    <label>Rating</label>
                    <input value={this.state.rating} onChange={this.handleRating} />
                    </div>
                    <div>
                    <label>User</label>
                    <input value={this.state.user_username} onChange={this.handleUser} />
                    </div>
                </div>
                <button type="submit">Create Review!</button>
            </form> 
        
    </div>
)
}
}
export default Form;