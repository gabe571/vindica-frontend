import React from 'react';
import CoffeeShop from './CoffeeShop'
import NavBar from './NavBar'

class CafesContainer extends React.Component {

  state = {
    cafes: [],
    cafe:{},
    isCafeViewOn: false,
    inputValue: '',
    inputSort: '',
    user: {
      id:0,
      username:'',
      token:'',
    }
}

componentDidMount() {
  fetch("http://localhost:3000/search")
  .then(resp => resp.json())
  .then(cafes => this.setState({ cafes: cafes.businesses }))
}

addToFav = (cafe) => {
  console.log(cafe)
  fetch(`http://localhost:3000/favorites`,{
    method: "POST",
    headers: { 
      "Content-Type" : "application/json",
      Accept: "application/json",
      Authorization: `bearer ${localStorage.token}`
    },
      body: JSON.stringify( cafe )
  })
  .then(res => res.json())
  .then(json => alert(json.message)
  )}
  
  cafeFilterOnChange = (e) => {
    console.log (e.target.value)
    this.setState({
      inputValue: e.target.value,
      inputSort: e.target.value,
    });
  };

  removeFav = (cafe) => {
    console.log(cafe)
    fetch(`http://localhost:3000/favorites/`, {
      method: 'DELETE',
      headers: { 
        "Content-Type" : "application/json",
        Accept: "application/json",
        Authorization: `bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
  }
render() {  
  
  const filteredCafes =
  this.state.cafes.filter( cafe => {
    return cafe.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
  })

  console.log(this.state.cafes)
  console.log(this.state.favorites)
    return (
      <div className="cafe-title"> 
      <label className="cafe-search"htmlFor="search">Search by Cafe Name</label>
      <br></br>
      
      <input type="text" className="cafe-search-bar" placeholder="Type Cafe Name Here..." value={this.inputValue} onChange={(e) => {this.cafeFilterOnChange(e)}}/>

      <ul>
        {
           filteredCafes.map(cafe => <CoffeeShop cafes={this.filteredCafes} handleCafeView={this.handleCafeView} cafeFilterOnChange={this.cafeFilterOnChange} inputValue={this.inputValue}
           addToFav={this.addToFav} key={cafe.id} cafe={cafe} removeFav={this.removeFav}/>)
        }  
      </ul>
     </div>
    )
  }
}
;
  export default CafesContainer;