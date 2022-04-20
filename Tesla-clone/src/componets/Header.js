import React from 'react';
import './Header.css'
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
        <div className="header_logo">
          <img src={TeslaLogo} alt="Tesla Logo"/>
        </div>

    <div className="header_center">
    <Link to = "./ModelSCustom"><p>ModelS</p></Link>
    <a href="./Model3"><p>Model 3</p></a>
    <a href="">Model Y</a>
    <a href="">Solar Roof</a>
    <a href="">Solar Panels</a>
</div>

<div className="header_right">
    <p>Shop</p>
    <p>Tesla Account</p>



</div>


    </div>
  )
}

export default Header
