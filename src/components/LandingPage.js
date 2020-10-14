import React from 'react'
import vindica from './vindica.png'

class LandingPage extends React.Component {


    render() {
        return (
               <div className="landingpage">
                   <img src={vindica} className="vindica" alt="background"></img>
           </div>
        )
}
}

export default LandingPage