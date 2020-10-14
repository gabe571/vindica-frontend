import React from 'react'
import Form from './Form'
class Cafes extends React.Component {
 
    state = {
        cafes: [],
        name:"",
        img_url:"",
        businesses:"",
    } 

    componentDidMount() {
        fetch("http://localhost:3000/search")
        .then(resp => resp.json())
        .then(cafes => this.setState({ cafes: cafes.businesses }))
      }
     

      render() {
        console.log(this.state.cafes)
        console.log(this.setState)
        return (
            <div>
                <li>Cafes:{this.state.businesses}</li>
                </div>

        )
      }
    }
export default Cafes;
