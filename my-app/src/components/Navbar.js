import React from "react";
import {Link} from "react-router-dom";
import "../style/main.scss";





const Navbar = ()=>{

    return(




    <nav>
      <div className={"Menu-container"}>
          <input id={"responsive-menu"} type={"checkbox"}/>
          <label htmlFor={"responsive-menu"}> BilKontroll.se
           
                <span id={"menu-icon"}></span></label>
        
          <ul> <li><Link to="/">Start sida</Link></li>
              <li><Link to="/Booking.js">Booka tid</Link></li>
              <li><Link to="/Form">Formulär</Link></li>
              <li><Link to="/Adminform">Adminform</Link></li>
              <li><Link to="/AdminSida">AdminSida</Link></li>
              <li><Link to="/Profile">profile</Link></li>
              <li><Link to="/UserPage">Logga in</Link></li>
       {/*        <li><Link to="/Adminform">Adminform</Link></li>
              <li><Link to="/AdminSida">AdminSida</Link></li> */}
          </ul>
      </div>
    </nav>
 
       
  )
}

export default Navbar;