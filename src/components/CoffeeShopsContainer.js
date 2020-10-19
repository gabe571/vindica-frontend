import React from 'react';
import CoffeeShop from './CoffeeShop'

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
    console.log(this.state.cafes)
    // console.log(this.state.name)
    return (
      <div className="cafe-title"> Cafes Near You!
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