import React from 'react'
import Favorite from './Favorite'
import NavBar from './NavBar'

class FavoritesContainer extends React.Component{

  
    state = {
        favorites: [],
    }
    
    componentDidMount(){
    fetch('http://localhost:3000/favorites')
    .then(res => res.json())
    .then(favorites => this.setState({ favorites }))
    }
    render() {
      console.log(this.state.favorites)
        return (
          <div> Favorites
          <ul>
            {
              this.state.favorites.map(favorite => <Favorite key={favorite.id} favorite={favorite}  />)
            }  
          </ul>
         </div>
        )
      }
    }
    ;

export default FavoritesContainer;