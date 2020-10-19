import React from 'react'

class Favorite extends React.Component {

 
   
    render() {
        // console.log(this.props)
        return (
        <div className="fav-card">
             <div>{this.props.favorite.coffee_shop_id} </div>
        </div>
            )
        }
    }
    export default Favorite;