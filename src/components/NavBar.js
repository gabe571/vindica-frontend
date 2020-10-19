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
           <NavLink to='/' exact>VINDICA</NavLink>
         </li>
         <li>
           <NavLink to='/home'>Home</NavLink>
         </li>
         <li>
           <NavLink to='/login'>Login</NavLink>
         </li>
         <li>
           <NavLink to='/SignUp'>Sign Up here!</NavLink>
         </li>
         <li>
           <NavLink to='/CoffeeShopsContainer'>Cafes!</NavLink>
         </li>
         <li>
           <NavLink to='/ReviewsContainer'>Reviews!</NavLink>
         </li>
         <li>
           {/* <NavLink to='/logout'>logout</NavLink> */}
         </li>
       </ul>
       
            </div>
        )
    }
}

export default NavBar