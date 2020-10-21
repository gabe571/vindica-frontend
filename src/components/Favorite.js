import React from 'react'

class Favorite extends React.Component {

 
   
    render() {
        // console.log(this.props)
        return (
        <div className="fav-card">
            <div>{this.props.favorite.name}</div>
        </div>
            )
        }
    }
    export default Favorite;