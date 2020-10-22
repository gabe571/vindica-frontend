import React from 'react';
import CoffeeShop from './CoffeeShop'
import NavBar from './NavBar'

class CafesContainer extends React.Component {

  state = {
    cafes: [],
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
  

render() {
    return (
      <div className="cafe-title"> 
       <NavBar />
      Cafes Near You!

      <ul>
        {
           this.state.cafes.map(cafe => <CoffeeShop addToFav={this.addToFav}  key={cafe.id} cafe={cafe}/>)
        }  
      </ul>
     </div>
    )
  }
}
;
  export default CafesContainer;