import React, { Component } from 'react'

class Reviews extends React.Component {
 
    state = {
        review: [],
        id: this.props.id,
        coffee_shop_id: this.props.coffee_shop_id,
        reviewed_coffee: this.props.reviewed_coffee,
        rating: this.props.rating,
        edit: true
    } 


handleContentEdit = (event) => {
    this.setState ({
        content: event.target.value
    })
}

handleShowForm = () => {
    this.setState({edit: false})
}

addReview = () => {
    return {id: this.state.id, coffee_shop_id: this.state.coffee_shop_id, reviewed_coffee: this.state.reviewed_coffee, rating: this.state.rating }
}
render() {
    return (
        <div>
        {this.state.edit ?
            <ul className="cards__item">
                <div className="card">
                    <div className="card_content">
                        <div>Review:{this.state.content}
                            <button onClick={() => this.props.delete(this.review)}>Delete</button>
                            <button onClick={() => this.handleShowForm()}>Edit</button>
                            <button onClick={() => this.handleFormApply()}>Apply</button>
                        </div>
                    </div>
                </div>
            </ul>
            :
            <form onSubmit={(e) => this.props.edit(e, this.addReview())}>
                <div>
                    <label>Review</label>
                    <textarea value={this.state.name} onChange={this.handleContentEdit} />
                </div>
                <button type="submit">Update</button>
            </form >
        }
    </div>
)
}
}
export default Reviews;