import React from "react";
import { Link } from "react-router-dom";

 function Landingpage(){
    return(
        <>
        
        <div>
            Welcome to Bloomzon International Admin Dashboard
        </div>
        <p>
            please take note that this website is strictly for Bloomzon international Admin workers.

        </p>
        <span>Please use to link to be redirected back to the company's main website</span>

        <div>
          <Link to={'/'}>
          
            Sign in as superadmin
          </Link>
     
        </div>
        <div>
            <Link to={'/adminform'}>
            
            Sign in as admin
            </Link>
        </div>


      

    
        </>

        
    )
}
export default Landingpage;