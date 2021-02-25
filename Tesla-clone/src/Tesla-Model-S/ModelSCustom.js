import React from 'react'
import Header from 'C:/React Projects/tesla-clone/Tesla-clone/src/componets/Header.js'
import ModelS_Item from 'C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/ModelS_Item.js'
import ModelS_Item2 from 'C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/ModelS_Item2.js'
import Slider from 'C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/ModelS_Item3.js'
import SidebySide1 from "C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/ModelS_Item4.js"
import  RangeLow from "C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/ModelS_Item5.js"
import Range from "C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/ModelS_Item5.js"
import ModelS from '../assets/Desktop-ModelS2.jpg'
import TeslaINT from "C:/React Projects/tesla-clone/Tesla-clone/src/assets/New-Tesla-Model-S-interior-hero.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/Models.css'
import Ludicrous from 'C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/ModelS_Item6.js'
import Power_Train from 'C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/ModelS_Item7.js'

function ModelSCustom() {
  return (


    <
    div className = 'App' >

    <Header/>

<div className ='Snap'>
    <
    ModelS_Item

    title = "ModelS"
    desc = "Plaid"
    descLink = ""
    backgroundImg = {ModelS}
    leftBtnTxt = 'Order Now'
    leftBtnLink = < button className = "onclick"
    onclick = "https://www.tesla.com/" > Order Now <
    /button>
    rightBtnTxt = 'Learn More'
    rightBtnLink = 'Learn More'
    twoButtons = 'true'
    first />


    <
    ModelS_Item2 title = "All New interior"
    desc = ""
    descLink = ""
    backgroundImg = {TeslaINT}/>



<div className="Slider">
    <Slider/>

    </div>

    <SidebySide1/>

    <Range
    title = ""
    desc = ""
    descLink = ""
    textleft ="1,020 hp"
    textleftdesc="Peak power"
    textcenter="9.23s"
    textcenterdesc='@155 mph 1/4 mile'
    textright="1.99s"
    textrightdesc="0-60 mph*"
    backgroundImg = {'https://tesla-cdn.thron.com/delivery/public/image/tesla/06e710a1-0428-45e9-8945-580e80d77b55/bvlatuR/std/2880x1800/MS-Performance-Hero-Desktop'}
    leftBtnTxt="Order Now"
    leftBtnLink="" />

<Ludicrous/>

<Power_Train/>













</div>
</div>




)
}









export default ModelSCustom
