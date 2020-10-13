import React, {Component} from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import MapContainer from './containers/MapContainer'
import Form from './components/Form'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Cafe from './components/Cafe'
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
<NavBar />    
  <Switch>
  <Route exact path='/' component={LandingPage}/>
  <Route path="/cafe" component={Cafe}/>
  <Route path="/login" component={Login}/>
  <Route path='/SignUp' component={SignUp}/>
  <Route path='/Home' component={Home}/>
  <Route path="/MapContainer" component={MapContainer}/>
  <Route path='/Form' component={Form}/>
</Switch>

</div>
  );
}
}
export default withRouter(App);