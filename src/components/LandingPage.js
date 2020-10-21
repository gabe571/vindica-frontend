import React from 'react'
import vindica from './vindica.png'

import Login from './Login'

class LandingPage extends React.Component {


    render() {
        return (
               <div className="landingpage"> 
                    <a href='/Login' Component={Login}>
                    <img src={vindica} alt="Logo" />
                </a>
           </div>
        )
    }
}

export default LandingPage
