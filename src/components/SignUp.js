import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
class SignUp extends React.Component{

    state={
      user:{
        id:0,
        username:"",
        token:""
      },
   
    }
     
       handleAuthResponse = (res) => {
         if(res.user){
           localStorage.token = res.token
           this.setState({user:{id:res.user.id, username:res.user.username, token:res.token}, home:res.user.home}, () => {
           this.props.history.push('/signup')
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
     


      handleSignUp = (e,userInfo) => {
          console.log(e)
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
      
handleSignUpChange = (e) => {
  let {name, value} = e.target
  this.setState({
    [name]: value
  })
}

render(){
  return (
    <div >
      <br/>
      <br/>
      <br/>
    <h2>SIGN UP FOR YOUR ACCOUNT</h2>
    <form onSubmit={(e) => this.handleSignUp(e, this.state)}>
    <input type="text" name="username" value={this.state.username} onChange={this.handleSignUpChange}/>
    <input type="password" name="password" value={this.state.password} onChange={this.handleSignUpChange}/>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}
}

export default withRouter(SignUp);
