import React from 'react'
// import email from './src/assets/Email.png'
import Signup from '../src/screen/Signup/signup'
import Forget from '../src/screen/forgot/forgot'
import Login from '../src/screen/Login/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App(){
  return (
    <div>
       <Router>
         <Switch>
           <Route component={Signup} path="/Signup" />
           <Route component={Forget} path="/forgot" />
           <Route component={Login} path="/" />
           
         </Switch>
       </Router>
    </div>
  )
}
 
  




export default App;

