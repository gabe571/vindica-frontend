import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import MapContainer from './containers/MapContainer'
import FavoritesContainer from './components/FavoritesContainer'
import Home from './components/Home'
import Login from './components/Login'
import ReviewsContainer from './components/ReviewsContainer'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Form from './components/Form'
import CoffeeShopsContainer from './components/CoffeeShopsContainer'
import {Route, Switch, withRouter} from 'react-router-dom'

class App extends React.Component {

  renderReviews = () => <ReviewsContainer  reviews={this.state.reviews}/>
  renderForm = () =>  <Form reviews={this.handleReview} />
  handleReview = () => {

  }
  render() {
    return (
      
      <div className="App">
<NavBar />    
  <Switch>
  <Route exact path='/' component={LandingPage}/>
  <Route path="/CoffeeShopsContainer" component={CoffeeShopsContainer}/>
  <Route path='/ReviewsContainer' component={ReviewsContainer}/>
  <Route path='/FavoritesContainer' component={FavoritesContainer}/>
  <Route path='/Home' component={Home}/>
  <Route path='/Login' component={Login}/>
  <Route path='/SignUp' component={SignUp}/>
  <Route path='/form' render={this.renderForm}/>
  <Route path="/MapContainer" component={MapContainer}/>
</Switch>
</div>
    );
  }
}
export default withRouter(App);