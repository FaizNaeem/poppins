import React from 'react'
import './signup.css'
import {NavLink} from 'react-router-dom'
// import picture from 'assets/login.png'

function Signup(){
    return(
        <div className="App">
            {/* <img src={picture}/> */}
    <h2>Singup</h2><br></br>
    <input className="allinput" type="text" placeholder="Name"/>
    <input className="allinput" type="text" placeholder="Email"/><br></br><br></br>
    <input className="allinput" type="text" placeholder="Phone Number"/>
    <input className="allinput" type="text" placeholder="Name"/>
    <div className="Appweb">
        
        <input className="allinput" type="text" placeholder="Email"/>
        <NavLink to="/">
        <button className="button">Signup</button>
        </NavLink>
        </div>
    
        </div>
        
    )
}

export default Signup;