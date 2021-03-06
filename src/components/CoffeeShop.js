import React from 'react'


class Cafes extends React.Component {

  state = {
    cafes: [],
      coffee_shop_name: this.props.cafe.name,
      coffee_shop_image_url: this.props.cafe.image_url,
      coffee_shop_phone: this.props.cafe.phone,
      coffee_shop_id: this.props.cafe.id,
  }

    handleAdd = (e) => {
        console.log(e)
        const cafe = {
            coffee_shop_name: this.state.coffee_shop_name,
            coffee_shop_image_url: this.state.coffee_shop_image_url,
            coffee_shop_phone: this.state.coffee_shop_phone,
            coffee_shop_id: this.state.coffee_shop_id,
          }
         this.props.addToFav(cafe)
        }
        
        handleRemove = (e) => {
          console.log(e)
          const cafe = {
              coffee_shop_name: this.state.coffee_shop_name,
              coffee_shop_image_url: this.state.coffee_shop_image_url,
              coffee_shop_phone: this.state.coffee_shop_phone,
              coffee_shop_id: this.state.coffee_shop_id,
            }
           this.props.removeFav(cafe)
          }
render() {

  return (
    <div>
      <div class="row">
        <div className="cafes">
        <img src={this.props.cafe.image_url} className="cafeimg"alt="cafe"></img>
        <div>{this.props.cafe.name} </div>
        <div> {this.props.cafe.location.display_address} </div>
        <div>{this.props.cafe.display_phone} </div>
            <div>
                 <button className="submit-fav" onClick={(e) => {this.handleAdd(e)}}>  ♥  </button>
                 <button className="submit-removefav" onClick={(e) => {this.handleRemove(e)}}> X </button>
                 </div> 
          </div>
    </div>
 </div>
        )
    }
  }
export default Cafes;