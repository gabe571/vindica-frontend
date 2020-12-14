import React from 'react'
import MapContainer  from '../containers/MapContainer'
import NavBar from './NavBar'
import CoffeeShopsContainer  from './CoffeeShopsContainer'
import Form from './Form'

class Home extends React.Component {

    state = {
        reviews: [],
        favorites: [],
    }

    componentDidMount(){
    fetch('http://localhost:3000/reviews')
    .then(res => res.json())
    .then(reviews => this.setState({ reviews }))
    }
              
    addReview = (review) => {
        fetch('http://localhost:3000/reviews',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Accept: "application/json",
                Authorization: `bearer ${localStorage.token}`
            },
            body: JSON.stringify({ review: review }
            ),
        })
        .then(res => res.json())
        .then(( json => {
            this.setState(prevState => ({
                reviews: [...prevState.reviews, json ]
               }))
        }))
    }
  
    render() {
        return (
               <div className="home">
                   <NavBar />
                   <CoffeeShopsContainer />
                   <MapContainer />
                   <Form addReview={this.addReview} review={this.handleSubmit} />
           </div>
        )
}
}

export default Home