import React from 'react';
import SignUp from './SignUp';
import { withRouter } from "react-router"

class Login extends React.Component{

    state={
      user:{
        id:0,
        username:"",
        token:""
      },
      home:[]
    }
     

       handleAuthResponse = (res) => {
         if(res.user){
           localStorage.token = res.token
           this.setState({user:{id:res.user.id, username:res.user.username, token:res.token}, home:res.user.home}, () => {
           this.props.history.push('/home')
         })
       } else {
           alert(res.error)
         }
       }

       handleLogin = (e, userInfo) =>{
        e.preventDefault()
        console.log(e)
     
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
     
      
handleChange = (e) => {
  let {name, value} = e.target
  this.setState({
    [name]: value
  })
}



render(){
  return (
    <div class="form-style-8">
  <h2>Login to your account</h2>
     <form onSubmit={(e) => this.handleLogin(e, this.state)}>
     <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
     <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
    <input type="submit" value="Submit" />
  </form>
  <SignUp />
</div>
  );
}
}

export default withRouter(Login)
