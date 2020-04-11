import React from 'react';
import '../App.css';
import Logo from '../img/donutlogo.png';
import { Link } from 'react-router-dom';

function About(){
    return(
        
        <div className="container-about">
            <img src={Logo} className="App-logo-small" />
            
            <h2>Developer</h2>
           
            <h5>Chinnakrit Ngeonsom 610610577</h5>
        
            <h5>Titaya Jitpang 610610579</h5>
            
            <h5>Samita Kedkaew 6106106620</h5>

            <p className="forgot-password text-right">
            Ready to order? <li><Link to="/">ORDER NOW</Link></li>
        </p>
            
        </div>
    );
}

export default About;