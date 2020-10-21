import React from 'react'

class Cafes extends React.Component {

  state = {
      coffee_shop_name: this.props.cafe.name,
      coffee_shop_id: this.props.cafe.id,
    //   coffee_shop_image_url: this.props.cafe.image_url
  }
  

    handleAdd = (e) => {

        console.log(e)
        const cafe = {
            coffee_shop_name: this.state.coffee_shop_name,
            coffee_shop_id: this.state.coffee_shop_id,
        //     coffee_shop_image_url: this.state.cafe.image_url
          }
            
         this.props.addToFav(cafe)
        }
render() {
  console.log(this.state)
    return (
    <div className="cafes">
        <img src={this.props.cafe.image_url} width="400" height="300"alt="cafe"></img>
        <div>{this.props.cafe.name} </div>
        <div> {this.props.cafe.location.display_address} </div>
        <div>{this.props.cafe.display_phone} </div>
            <div>
                 <button className="submit-fav" onClick={(e) => {this.handleAdd(e)}}>Add to Favorites</button>
            </div>
    </div>
        )
    }
}
export default Cafes;

