import React from 'react';

class Login extends React.Component{
    state={
        user:{
          id:0,
          username:"",
          password:"",
          token:""
        },
        allCafes:[]
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
          this.setState({user:{id:res.user.id, username:res.user.username, token:res.token},
            allCafe:res.user.cafes}, () => {
          this.props.history.push('/Cafes')
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
     
handleChange = (e) => {
  let {name, value} = e.target
  this.setState({
    [name]: value
  })
}

renderLoginPage = () => <Login handleLogin={this.handleLogin}/>

render(){
  return (
    <div className="Login">
        <h1>LOGIN IN HERE!</h1>
     <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
         <label>UserName</label>
         <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <br/>
         <label>Password</label>
         <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
         <br/>
         <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
}

export default Login;