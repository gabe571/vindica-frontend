import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavBar extends Component {
    

    handleLogoutClick = (e) => {
      e.preventDefault()
      localStorage.clear();
      this.props.history.push("/");
       console.log(localStorage)
      };
  
    render() {
        return (
            <div className="navbar">
    <ul>
         <li>
           <NavLink to='/home' exact>VINDICA</NavLink>
         </li>
         <li>
           <NavLink to='/Reviews'>Reviews!</NavLink>
         </li>
         <li>
           <NavLink to='/Favorites'>Favorites</NavLink>
        </li>
         <li>
         <a id="logout" href="#" onClick={this.handleLogoutClick}>
                LOGOUT
              </a>
         </li>
       </ul>
       
            </div>
        )
    }
}

export default withRouter(NavBar)
