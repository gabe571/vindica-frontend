import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'

class LandingPage extends React.Component {


    render() {
        return (
               <div>
                   <h1>VINDICA!</h1>
<Login />
<SignUp />
           </div>
        )
}
}

export default LandingPage