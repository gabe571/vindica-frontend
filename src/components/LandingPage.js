import React from 'react'
import landingpage from './landingpage.png'

import Login from './Login'

class LandingPage extends React.Component {


    render() {
        return (
         <div>
               <div 
               className="landingpage"> 
                    <a href='/Login' Component={Login}>
                    <img className="lpi" src={landingpage} alt="Logo" />
                </a>
           </div>
        </div>
        )
    }
}

export default LandingPage
