import React, {Component} from 'react';
import './App.css';
import MapContainer from './containers/MapContainer'
import Form from './components/Form'
import Login from './components/Login'
import Home from './components/Home'
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'



class App extends Component {

  state={
    user:{
      id:0,
      username:"",
      token:""
    },
    allArt:[]
  }

  componentDidMount(){
   if(localStorage.token) {
     fetch('http://localhost:3000/persist',{
       headers:{
         "Authorization": `Bearer ${localStorage.token}`
       }
     })
     .then(res => res.json())
     .then(json =>{
       console.log(json)
        this.handleAuthResponse(json)
     })
     
   }
  }

  handleAuthResponse = (res) => {
    if(res.user){
      localStorage.token = res.token
      this.setState({user:{id:res.user.id, username:res.user.username, token:res.token}, allArt:res.user.arts}, () => {
      this.props.history.push('/paintings')
    })
  } else {
      alert(res.error)
    }
  }

  handleLogin = (e, userInfo) =>{
    e.preventDefault()
 
    fetch('http://localhost:3000/login',{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify(userInfo)
   })
   .then(res => res.json())
   .then(json => {
     console.log(json)
     if(!json.error){
       this.handleAuthResponse(json)
     }else {
       alert(json.error)
     }
   })
   .catch(err => console.log(err))
  }
 
  handleSignup = (e,userInfo) => {
   e.preventDefault()
    fetch('http://localhost:3000/users',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(json => {
     if(!json.error){
       this.handleAuthResponse(json)
     }else {
       alert(json.error)
     }
    })
  }

  renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin}/>
  renderSignUpPage = () =>  <Login handleLoginOrSignup={this.handleSignup}/>
  render() {
    return (
      <div className="App">
      <header>
        <h1>VINDICA</h1>
        <h3>The coffee shop locator for Seattle!</h3>
       <ul>
         <li>
           <NavLink to='/' exact>Home</NavLink>
         </li>
         <li>
           <NavLink to='/login'>Login</NavLink>
         </li>
         <li>
           <NavLink to='/signup'>Sign up</NavLink>
         </li>
       </ul>
      </header>
      
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/login' render={this.renderLoginPage}/>
  <Route path='/signup' render={this.renderSignUpPage}/>
</Switch>
<MapContainer />
<Form />
</div>
  );
}
}
export default withRouter(App);