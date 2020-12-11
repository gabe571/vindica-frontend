import React from 'react'
import Favorite from './Favorite'
import NavBar from './NavBar';

class FavoritesContainer extends React.Component{
    state = {
      favorites: [],
      cafes:[],
    }
     render() {
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