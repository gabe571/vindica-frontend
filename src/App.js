import React, {Component} from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import MapContainer from './containers/MapContainer'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Cafe from './components/Cafe'
import {Route, Switch, withRouter} from 'react-router-dom'

class App extends React.Component {


  render() {
    return (
      
      <div className="App">
<NavBar />    
  <Switch>
  <Route exact path='/' component={LandingPage}/>
  <Route path="/cafe" component={Cafe}/>
  <Route path='/Home' component={Home}/>
  <Route path='/Login' component={Login}/>
  <Route path='/SignUp' component={SignUp}/>
  <Route path="/MapContainer" component={MapContainer}/>
</Switch>
</div>
    );
  }
}
export default withRouter(App);