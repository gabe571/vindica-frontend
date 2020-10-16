import React from 'react'
import Form from './Form'
class Cafes extends React.Component {
 
    state = {
        cafes: [],
        name:"",
        img_url:"",
        businesses:"",
        phone:"",
    } 

    componentDidMount() {
        fetch("http://localhost:3000/search")
        .then(resp => resp.json())
        .then(cafes => this.setState({ cafes: cafes.businesses }))
      }
     

      render() {
        console.log(this.state.cafes)
        return (
            <div>
                <ul className="cafes"> Cafes:{this.state.name}</ul>
                </div>
             

        )
      }
    }
export default Cafes;
