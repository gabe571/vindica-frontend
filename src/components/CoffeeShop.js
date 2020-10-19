import React from 'react'
class Cafes extends React.Component {

render() {
    console.log(this.props.cafe)
    return (
    <div className="cafes">
        <img src={this.props.cafe.image_url} width="400" height="300"alt="cafe"></img>
        <div>{this.props.cafe.name} </div>
        <div> {this.props.cafe.location.display_address} </div>
        <div>{this.props.cafe.display_phone} </div>
        <button>Add to Favorites!</button>
    </div>
        )
    }
}
export default Cafes;