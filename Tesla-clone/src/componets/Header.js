import React from 'react';
import './Header.css'
import TeslaLogo from "C:/React Projects/tesla-clone/Tesla-clone/src/assets/teslaLogoSmall.svg";


const Header = () => {
  return (
    <div className='header'>
        <div className="header_logo">
          <img src={TeslaLogo} alt="Tesla Logo"/>
        </div>

    <div className="header_center">
    <a href = "./ModelSCustom">ModelS</a>
    <a href="./Model3">Model 3</a>
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
