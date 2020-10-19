import React from 'react'
class Cafes extends React.Component {

    handleAddFavorite = (e) => {
        e.preventDefault()
        console.log(e)
    }

render() {
    // console.log(this.props.cafe)
    return (
    <div className="cafes">
        <img src={this.props.cafe.image_url} width="400" height="300"alt="cafe"></img>
        <div>{this.props.cafe.name} </div>
        <div> {this.props.cafe.location.display_address} </div>
        <div>{this.props.cafe.display_phone} </div>
        <form onSubmit={this.handleAddFavorite}>
            <div>
                <button type ="submit">
                    Add to Favorites
                </button>
            </div>
        </form>
    </div>
        )
    }
}
export default Cafes;