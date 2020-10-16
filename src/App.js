import React, {Component} from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import MapContainer from './containers/MapContainer'
import Home from './components/Home'
import Login from './components/Login'
import ReviewsContainer from './components/ReviewsContainer'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Cafes from './components/Cafes'
import Form from './components/Form'
import {Route, Switch, withRouter} from 'react-router-dom'

class App extends React.Component {

  renderReviews = () => <ReviewsContainer  reviews={this.state.reviews} delete={this.deleteHandler} edit={this.editHandler}/>

  renderForm = () =>  <Form reviews={this.handleSubmit} />


  render() {
    return (
      
      <div className="App">
<NavBar />    
  <Switch>
  <Route exact path='/' component={LandingPage}/>
  <Route path="/cafes" component={Cafes}/>
  <Route path="/reviewscontainer" render={this.renderReviews}/>
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