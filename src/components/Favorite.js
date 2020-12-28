import React from 'react'


class Favorite extends React.Component {
    
    state = {
    favorites:[],
    cafes:[],
    }
       
   handleDelete = (e) =>{
    const cafedelete = {
        coffee_shop_name: this.state.coffee_shop_name,
        coffee_shop_image_url: this.state.coffee_shop_image_url,
        coffee_shop_phone: this.state.coffee_shop_phone,
        coffee_shop_id: this.state.coffee_shop_id,
      }  
     this.props.removeFav(cafedelete)
    }
   
   render() {
        return (
        <div className="grid-container">
            <ul className="fav-ul">
             <img src={this.props.favorite.coffee_shop.image_url} className="fav-img"alt="cafe"></img>
            <div>{this.props.favorite.coffee_shop.name}</div>
        <div>{this.props.favorite.coffee_shop.phone}</div>
        {/* <button onClick={(e) => {this.handleDelete(e)}}>X</button> */}
        </ul>
        </div>
            )
        }
    }
    export default Favorite;