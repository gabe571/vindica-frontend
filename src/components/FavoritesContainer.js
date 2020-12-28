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
    
    componentDidMount() {
      fetch(`http://localhost:3000/favorites`)
      .then(resp => resp.json())
      .then(favorites => this.setState({ favorites }))
    }
    
    cafeFilterOnChange = (e) => {
      console.log (e.target.value)
        this.setState({
          inputValue: e.target.value,
          inputSort: e.target.value,
        });
    };  

     render() {
        return (
          <div> 
          <NavBar /> 
            <h5 className="fav-text">Favorites</h5>
          <ul className='tf-grid'>
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

