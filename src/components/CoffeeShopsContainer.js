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

render() {
    // console.log(this.state.cafes)
    return (
      <div className="cafe-title"> 
       <NavBar />
      Cafes Near You!

      <ul>
        {
           this.state.cafes.map(cafe => <CoffeeShop key={cafe.id} cafe={cafe}/>)
        }  
      </ul>
     </div>
    )
  }
}
;
  export default CafesContainer;