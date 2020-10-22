import React from 'react'
import coffeelog from './coffeelog.png'

import Login from './Login'

class LandingPage extends React.Component {


    render() {
        return (
               <div className="landingpage"> 
                    <a href='/Login' Component={Login}>
                    <img className="lpi" src={coffeelog} alt="Logo" />
                </a>
           </div>
        )
    }
}

export default LandingPage
