import React from 'react';
import CoffeeShop from './CoffeeShop'
import NavBar from './NavBar'
import coffeecup from './coffeecup.png'

class CafesContainer extends React.Component {

  state = {
    cafes: [],
    cafe:{},
    isCafeViewOn: false,
    inputValue: '',
    inputSort: '',
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
  
  const filteredCafes =
  this.state.cafes.filter( cafe => {
    return cafe.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
  })

  console.log(this.state.cafes)
    return (
      <div className="cafe-title"> 
       <img className="cup" src={coffeecup} alt="cup" />
       <NavBar />
      <label className="cafe-search"htmlFor="search">Search by Cafe Name</label>
      <br></br>
      
      <input type="text" className="cafe-search-bar" placeholder="Type Cafe Name Here..." value={this.inputValue} onChange={(e) => {this.cafeFilterOnChange(e)}}/>

      <ul>
        {
           filteredCafes.map(cafe => <CoffeeShop cafes={this.filteredCafes} handleCafeView={this.handleCafeView} cafeFilterOnChange={this.cafeFilterOnChange} inputValue={this.inputValue}
           addToFav={this.addToFav} key={cafe.id} cafe={cafe} />)
        }  
      </ul>
     </div>
    )
  }
}
;
  export default CafesContainer;