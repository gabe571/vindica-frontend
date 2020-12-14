import React from 'react'
import NavBar from "./NavBar"
import Favorite from './Favorite'

class FavoritesContainer extends React.Component{
    state = {
      favorites: [],
      cafes:[],
    }
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