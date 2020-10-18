import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import MapContainer from './containers/MapContainer'
import Home from './components/Home'
import Login from './components/Login'
import ReviewsContainer from './components/ReviewsContainer'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Cafes from './components/Cafes'
// import Form from './components/Form'
import {Route, Switch, withRouter} from 'react-router-dom'

class App extends React.Component {
  
  

  // componentDidMount(){
  //   fetch('http://localhost:3000/reviews')
  //   .then(res => res.json())
  //   .then(reviews => this.setState({ reviews }))

  
  // renderForm = () =>  <Form reviews={this.handleSubmit} />


  render() {
    return (
      
      <div className="App">
<NavBar />    
  <Switch>
  <Route exact path='/' component={LandingPage}/>
  <Route path="/cafes" component={Cafes}/>
  <Route path='/ReviewsContainer' component={ReviewsContainer}/>
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