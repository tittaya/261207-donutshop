import React, { Component } from 'react';
import '../App.css';
import Logo from '../img/donutlogo.png';
import Logo2 from '../img/donutlogoB.png';
import Logo3 from '../img/donutlogoV.png';
import UserDetail from '../components/layout/UserDetail';
import { Link } from 'react-router-dom';

class Menu extends Component{
    render(){
        return(
        <form className="menu">
        <img src={Logo} className="App-logo-small" />
        <div className="split left">
        <h3>Menu</h3>
            <h4><button type="submit" className="button" value="strawberry">add</button>
            <img src={Logo} className="App-logo-small" />
            <lable for="pinkgaze">Strawberry Donut</lable>
            <lable for="price"> 25B</lable></h4>
            <h4><button type="submit" className="button" value="blueberry">add</button>
            <img src={Logo2} className="App-logo-small" />
            <lable for="bluegaze">Bluebery Donut</lable>
            <lable for="price"> 25B</lable></h4>
            <h4><button type="submit" className="button" value="vanilla">add</button>
            <img src={Logo3} className="App-logo-small" />
            <lable for="creamgaze">Vanilla Donut</lable>
            <lable for="price"> 25B</lable></h4>
        </div>


        <div className="split right">
        <h4>Order</h4>
        <table className="table-order" align="center" >
        <tr>
            <th>Menu</th>
            <th>Price</th>
            </tr>
            <tr>
                <td>menu</td>
                <td>price</td>
                </tr>
                <tr>
            <td>menu</td>
            <td>price</td>
            </tr>
            </table>
        </div>   

        </form>
        )
    }
    
}

export default Menu;