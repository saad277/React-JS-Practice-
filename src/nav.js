import React from 'react';
import {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

class Nav extends Component {

constructor(){

super()





}

render(){



return(

<nav>   
        
        <ul className="nav-links">

         <Link to="/home">      <li>  Home  </li>       </Link> 
                                <li>  Contact  </li>
         <Link to="/about">      <li>  About  </li>      </Link> 
        </ul>


</nav>



)


}








}

export default Nav;