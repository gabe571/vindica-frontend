import React from 'react'
import NavBar from "./NavBar"
import Favorite from './Favorite'

class FavoritesContainer extends React.Component{
     state={
      user:{
        id:0,
        username:"",
        token:""
      },
      favorites: [],
      cafes:[],
    }
     
    addToFav = (cafe) => {
      console.log(cafe)
      fetch(`http://localhost:3000/favorites/`,{
        method: "POST",
        headers: { 
          "Content-Type" : "application/json",
          Accept: "application/json",
          Authorization: `bearer ${localStorage.token}`
        },
          body: JSON.stringify( cafe )
      })
      .then(res => res.json())
      .then(console.log)
      }
      cafeFilterOnChange = (e) => {
        console.log (e.target.value)
        this.setState({
          inputValue: e.target.value,
          inputSort: e.target.value,
        });
      };     
     render() {
      console.log(this.state.favorites)
        return (
          <div> 
          <NavBar /> 
            <h5 className="fav-text">Favorites</h5>
          <ul>
            {
              this.state.favorites.map(favorite => <Favorite key={favorite.id} favorite={favorite} removeFav={this.removeFav}
                 />)
            }  
          </ul>
         </div>
        )
      }
    }
    ;

export default FavoritesContainer;