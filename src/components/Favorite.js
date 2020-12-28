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
        coffee_shop_id: this.state.coffee_shop_id,
      }  
     this.props.removeFav(cafedelete)
    }
   
   render() {
        return (
        <div className="grid-container">
               {/* <button onClick={(e) => {this.handleDelete(e)}}>X</button> */}
            <ul className="fav-ul">
             <img src={this.props.favorite.coffee_shop.image_url} className="fav-img"alt="cafe"></img>
            <div>{this.props.favorite.coffee_shop.name}</div>
            </ul>
        </div>
            )
        }
    }
    export default Favorite;