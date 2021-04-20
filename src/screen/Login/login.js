import React from 'react'
import './login.css'
import {NavLink} from 'react-router-dom'
// import picture from 'assets/login.png'

function Login(){
    return(
        <div className="App">
            {/* <img src={picture}/> */}
            <h2>Login</h2><br></br>
            <input className="allinput" type="text" placeholder="Email"/><br></br><br></br>
            <input className="allinput" type="password" placeholder="Password"/><br></br><br></br>
            <a href></a>
       
            <NavLink to="/">
            <button className="button">Login</button>
            </NavLink>

            <NavLink to="/Signup">
            <button className="button">Create account</button>
            </NavLink>
            </div>
    
        
        
    )
}

export default Login;