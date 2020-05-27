import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import App from "./App";
import Notfoundpage from "./Notfoundpage";
import Form from "./Form";
import Footer from "./Footer"
import Adminform from "./Adminform";
import FirebaseTest from "./FirebaseTest";
import AdminSida from "./AdminSida";
import Booking from "./Booking";
import Profile from "./Profile";
import UserPage from "./AuthUser/UserPage";
import UserLogin from "./AuthUser/UserLogin";
import UserProfile from "./AuthUser/UserProfile";


const Approute = ()=>{

    return(

        <div>
            <BrowserRouter>
                <Navbar/>
         
                <Switch>
                
                
              
             
                <Route path="/" component={ App} exact ></Route>
                <Route path="/Bookings" component= {Booking} exact></Route>
                <Route path="/Adminform"  component= {Adminform} exact></Route>
                <Route path="/AdminSida" exact component={AdminSida}></Route>
                <Route path="/form"  component= {Form} exact></Route>
                <Route path="/profile"  component= {Profile} exact></Route>
                <Route path="/UserLogin"  component= {UserLogin} exact></Route>
                <Route path="/UserProfile"  component= {UserProfile} exact></Route>
                <Route path="/UserPage"  component= {UserPage} exact></Route>
                <Route component={Notfoundpage}></Route>

                
                


                </Switch>
                <Footer/> 
            </BrowserRouter>


        </div>



    )



}
export default Approute;