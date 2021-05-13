
import './App.css';
import React from "react";
import {Route,Switch,Link, BrowserRouter} from 'react-router-dom';
import Register from './pages/Register'
import Signin from './pages/Signin'

function App(props) {
  const handleLoginShow = () => {
    window.location.href('/')
  }
  const handleSignin = () => {
    window.location.href('/')
  }

  return (
    <BrowserRouter>
    
    <div style={{height: "100%"}}>
      <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
    
  <ul className="navbar-nav ml-auto">


        <li className="nav-item">
        <button className="totcery-btn-primary mr-2"  onClick={handleLoginShow}>
            Login
          </button>
      </li>

        <li className="nav-item">
        <button className="totcery-btn-primary mr-2"  onClick={handleSignin}>
            Sign up
          </button>
      </li>
 
   
  </ul>
</nav>
  <nav className="navbar navbar-default" style={{backgroundColor:"#8cc540"}}>
    <div className="container-fluid secondary-menu" style={{
    height: "48px"
}} >
    
      
    
 
  

    </div>
  </nav>

       
      
  

    
    <main>


        <Route path="/register" component={Register}/>
        <Route path="/" exact component={Signin}/>


        </main>

    </div>
    </BrowserRouter>
  );
}

export default App;
