import React, { Component } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import vindica from './vindica.png'

class LandingPage extends React.Component {


    render() {
        return (
               <div className="landingpage">
                   <Login />
                    <SignUp />
                   <img src={vindica} className="vindica"></img>
           </div>
        )
}
}

export default LandingPage