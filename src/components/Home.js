import React from 'react'
import MapContainer  from '../containers/MapContainer'
import NavBar from './NavBar'
import FavoritesContainer  from './FavoritesContainer'
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

    componentDidMount(){
        fetch('http://localhost:3000/favorites')
        .then(res => res.json())
        .then(favorites => this.setState({ favorites }))
        }

    addReview = (review) => {
        //fetch call?
        fetch('http://localhost:3000/reviews',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Accept: "application/json",
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
    
    addToFav = (cafe) => {
        console.log(cafe)
    }
   
    render() {
        // console.log(this.state.cafe)
        return (
               <div className="home">
                   <NavBar />
                   <Form addReview={this.addReview} review={this.handleSubmit}/>
                   <FavoritesContainer/>
                   <MapContainer />
           </div>
        )
}
}

export default Home