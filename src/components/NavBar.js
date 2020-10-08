import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class NavBar extends Component {
    state = {
        users: [],
        name: ""
    }
    
    
    render() {
        return (
            <div className="navbar">
    <ul>
         <li>
           <NavLink to='/' exact>Home</NavLink>
         </li>
         <li>
           <NavLink to='/login'>Login</NavLink>
         </li>
         <li>
           <NavLink to='/SignUp'>Sign Up here!</NavLink>
         </li>
         <li>
           <NavLink to='/MapContainer'>MAP!</NavLink>
         </li>
       </ul>
       
            </div>
        )
    }
}

export default NavBar