import React, { Component } from 'react'


class Reviews extends React.Component {
 
    state = {
        reviews: [],
        id: this.props.review.id,
        name: this.props.review.name,
        review: this.props.review.content,
        rating: this.props.review.rating,
        edit: true
    } 

handleNameEdit = (event) => {
    this.setState ({
        name: event.target.value
    })
}

handleReviewEdit = (event) => {
    this.setState ({
        content: event.target.value
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

handleAddReview = () => {
    return {id: this.state.id, name: this.state.name, content: this.state.content, rating: this.state.rating }
}

render() {
    const { name, content, rating } = this.props.review
    return (
        <div>
            {this.state.edit ?
                <ul className="cards__item">
                    <div className="card">
                        <div className="card_content">
                            <div className="CoffeeShop">Coffee Shop:{name}
                                <div className="Review">Review: {content}</div>
                                <div className="Rating">Rating: {rating}</div>
                                <button onClick={() => this.props.delete(this.props.guild)}>Delete</button>
                                <button onClick={() => this.handleShowForm()}>Edit</button>
                                <button onClick={() => this.handleFormApply()}>Apply</button>
                            </div>
                        </div>
                    </div>
                </ul>
                :
                <form onSubmit={(e) => this.props.edit(e, this.addReview())}>
                    <div>
                        <label>Coffee Shop</label>
                        <input type='text' value={this.state.name} onChange={this.handleNameEdit} />
                    </div>
                    <div>
                        <label>Review</label>
                        <input type='text' value={this.state.content} onChange={this.handleReviewEdit} />
                    </div>
                    <div>
                        <label>Rating</label>
                        <input type='text' value={this.state.rating} onChange={this.handleRatingEdit} />
                    </div>
                    <button type="submit">Update</button>
                </form >
            }
        </div>
        )
    }
}
export default Reviews;