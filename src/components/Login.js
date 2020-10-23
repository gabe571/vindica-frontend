import React from 'react';
import SignUp from './SignUp';
import coffeecup from './coffeecup.png'

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
    <div><img className="cup-two" src={coffeecup} alt="cup" />
    <div className="login">Welcome Back!
     <form onSubmit={(e) => this.handleLogin(e, this.state)}>
       <div>
         <label>UserName</label>
         <br></br>
         <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
         </div>
         <div>
         <label>Password</label>
         <br></br>
         <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
         </div>
         <input type="submit" value="Submit" className="sl-btn" />
      </form>
      <div></div>
      <SignUp />
    </div>
  </div>
  );
}
}

export default Login;