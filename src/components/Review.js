import React from 'react'



class Review extends React.Component {


render() {
    console.log(this.props)
    return (
        <div className="review-card">
            <div className="Review">Coffee Shop: {this.props.review.coffee_shop_name}
                <div className="Review">Review: {this.props.review.reviewed_coffee}
                    <div className="Review">User: {this.props.review.user_username}
                         <div className="Review">Stars: {this.props.review.rating}
                     </div>
                 </div>
             </div>
        </div>
 </div>
        )
    }
}

export default Review;