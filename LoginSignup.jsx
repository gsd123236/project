import React, { useState } from "react";
import './LoginSignup.css'

import lock_icon from '../Assets/lock.svg'
import user_icon from '../Assets/user.svg'
const LoginSignup =() =>{

    const [action,setAction] =useState("sing Up");
    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:
               <div className="input">
                <input type="Email" placeholder="Email ID"/>
                </div>}
                <div className="input">
                <img src={user_icon} alt="" />
                <input type="Username" placeholder="User Name" />
                </div> 
                <div className="input">
                <img src={lock_icon} alt="" />
                <input type="password" placeholder="Password" />
                </div> 
            </div>
            {action==="Sign Up"?<div></div>:
            <div className="forgot-paasword">Lost Password <span>click Here!</span></div>}
            <div className="submit-container">
              <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign Up</div> 
              <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>  
            </div>
        </div>
    )
}