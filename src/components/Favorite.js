import React from 'react'


class Favorite extends React.Component {

 
   
    render() {
        console.log(this.props)
        return (
        <div className="fav-card">
            <ul className="fav-ul">
             <img src={this.props.favorite.coffee_shop.image_url} className="fav-img"alt="cafe"></img>
            <div>{this.props.favorite.coffee_shop.name}</div>
        <div>{this.props.favorite.coffee_shop.phone}</div>
        </ul>
        </div>
            )
        }
    }
    export default Favorite;