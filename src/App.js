import React, {Component} from 'react';
import './App.css';
import MapContainer from './containers/MapContainer'
import Form from './components/Form'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
<NavBar />    
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route path="/login" component={Login}/>
  <Route path='/SignUp' component={SignUp}/>
  <Route path="/MapContainer" component={MapContainer}/>
  <Route path='/Form' component={Form}/>
</Switch>

</div>
  );
}
}
export default withRouter(App);