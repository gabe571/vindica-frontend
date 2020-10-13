import React, { Component } from 'react'
import MapContainer  from '../containers/MapContainer'
import Form from './Form'

class Home extends React.Component {


    render() {
        return (
               <div>
                   <MapContainer />
                   <Form />
           </div>
        )
}
}

export default Home