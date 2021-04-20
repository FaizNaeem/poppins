import React from 'react'
import './forgot.css'
import {NavLink} from 'react-router-dom'

function Forgot(){
    return(
<div className="App">
    <h2>
        Forget password
    </h2><br></br><br></br>
    <input className="allinput" type="text" placeholder="Email"/><br></br><br></br>
    <NavLink to="/login">
        <button className="but">Submit</button>
    </NavLink>
</div>

    )
}

export default Forgot;