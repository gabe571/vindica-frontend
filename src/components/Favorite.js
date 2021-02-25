import React from 'react'


class Favorite extends React.Component {
    
    state = {
    favorites:[],
    cafes:[],
    }
       
   render() {
        return (
        <div className="grid-container">
            <ul className="fav-ul">
             <img src={this.props.favorite.coffee_shop.image_url} className="fav-img"alt="cafe"></img>
            <div>{this.props.favorite.coffee_shop.name}</div>
            </ul>
        </div>
            )
        }
    }
    export default Favorite;