import React from 'react'
import MapContainer  from '../containers/MapContainer'
import NavBar from './NavBar'
import FavoritesContainer  from './FavoritesContainer'
import CoffeeShopsContainer from './CoffeeShopsContainer'
import coffeecup from './coffeecup.png'
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
        //fetch call?
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
        // console.log(this.state.cafe)
        return (
               <div className="home">
                    <img className="cup" src={coffeecup} alt="cup" />
                   <NavBar />
                   <MapContainer />
                   <FavoritesContainer />
                   <Form addReview={this.addReview} review={this.handleSubmit}/>
              
           </div>
        )
}
}

export default Home