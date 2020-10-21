import React from "react";
import {Link} from "react-router-dom";
import "../style/main.scss";


window.fbAsyncInit = function() {
  FB.init({
    appId      : '639624363402510',
  xfbml      : true,
  version    : 'v8.0'
  });
    
  
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
}); 
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 function statusChangeCallback(response){
     if(response.status === 'connected'){
         console.log('logged in and autenticated');
     } else {
         console.log('not autenticarted');
     }
 }

 
    function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
    }


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
              <button scope="public_profile,email"
    onlogin="checkLoginState();">Facceboooook</button>
       {/*        <li><Link to="/Adminform">Adminform</Link></li>
              <li><Link to="/AdminSida">AdminSida</Link></li> */}
          </ul>
      </div>
    </nav>
 
       
  )
}

export default Navbar;