import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    

    handleLogoutClick = (e) => {
      e.preventDefault()
      localStorage.clear();
      // this.props.history.push("/");
       console.log(localStorage)
      };
  
  
      
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
           <NavLink to='/Cafes'>Cafes!</NavLink>
         </li>
         <li>
           <NavLink to='/Reviews'>Reviews!</NavLink>
         </li>
         <li>
         <a id="logout" href="logout" onClick={this.handleLogoutClick}>
                logout
              </a>
         </li>
       </ul>
       
            </div>
        )
    }
}

export default NavBar