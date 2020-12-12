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
    <div className="form-container">
            <form onSubmit={(e) => {this.handleForm(e)}}>
                <div>
                    <div>
                    <label>Cafe</label>
                    <br></br>
                    <input type="text"  placeholder="Cafe Name..." value={this.state.coffee_shop_name} onChange={this.handleCoffeeShopName} />
                    </div>
                    <label>Review</label>
                    <br></br>
                    <textarea type="text" placeholder="Your Experience..." value={this.state.reviewed_coffee} onChange={this.handleReviewedCoffee} />
                    <div>
                    <label>Stars</label>
                    <br></br>
                    <input type="number"  max="5" min="0" value={this.state.rating} onChange={this.handleRating} />
                    </div>
                    <div>
                    <label>Member Name</label>
                    <br></br>
                    <input  type="text" placeholder="Member Name"value={this.state.user_username} onChange={this.handleUser} />
                    </div>
                </div>
                <button type="submit" className="sub-review">Create Review!</button>
            </form> 
        
    </div>
)
}
}
export default Form;