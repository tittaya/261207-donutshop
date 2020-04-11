import React from 'react';
import '../App.css';
import Logo from '../img/donutlogo.png';
import { Link } from 'react-router-dom';

function Welcome(){
    return(
        
        <div className="container">
            <img src={Logo} className="App-logo" />
            
            <ul className="App-link">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/about">About</Link></li>

            </ul>
        </div>
    );
}

export default Welcome;