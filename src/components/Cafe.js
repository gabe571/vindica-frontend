import React from 'react'
import Form from './Form'
class Cafe extends React.Component {
 
    state = {
        cafes: [],
        name:"",
        img_url:"",
        businesses:"",
        name:"",
 
    } 

    componentDidMount() {
        fetch("http://localhost:3000/search")
        .then(resp => resp.json())
        .then(cafes => this.setState({ cafes: cafes }))
      }
     

      render() {
        return (
            <div>
                <li>Cafes:{this.state.businesses.name}</li>
                <Form />
                </div>

        )
      }
    }
export default Cafe;
