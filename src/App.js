import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import MapContainer from './containers/MapContainer'
import FavoritesContainer from './components/FavoritesContainer'
import Home from './components/Home'
import Login from './components/Login'
import ReviewsContainer from './components/ReviewsContainer'
import SignUp from './components/SignUp'
import Review from './components/Review'
import Form from './components/Form'
import CoffeeShopsContainer from './components/CoffeeShopsContainer'
import {Route, Switch, withRouter, BrowserRouter} from 'react-router-dom'

class App extends React.Component {

  
  

  render() {
    return (
      

    <div className="App">
  <Switch>
  <Route exact path='/' component={LandingPage}/>
  <Route path="/Cafes" component={CoffeeShopsContainer}/>
  <Route path="/Reviews" component={ReviewsContainer}/>
  <Route path='/Favorites' component={FavoritesContainer}/>
  <Route path='/Home' component={Home}/>
  <Route path='/Login' component={Login}/>
  <Route path='/SignUp' component={SignUp}/>
  <Route path='/form' render={this.renderForm}/>
  <Route path="/Map" component={MapContainer}/>
</Switch>
</div>
    );
  }
}
export default withRouter(App);


