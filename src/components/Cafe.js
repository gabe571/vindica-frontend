import React, { Component } from 'react'
class Cafe extends React.Component {
 
    state = {
        cafes: [],
        name:"",
        img_url:"",
        buisnesses:"",
 
    } 

    componentDidMount() {
        fetch("http://localhost:3000/search")
        .then(resp => resp.json())
        .then(cafes => this.setState({ cafes: cafes.businesses }))
      }
     

render() {
    // console.log(this.setState)
    return (
        <div>
            <ul>
        <div className="card_title">CAFES:{this.state.cafes.businesses}</div>
        </ul>
        </div>
    )
}
}
export default Cafe;