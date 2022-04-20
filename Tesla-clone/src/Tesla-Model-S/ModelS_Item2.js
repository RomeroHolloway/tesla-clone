import Button from '../componets/Button.js'
import {Carousel,CarousellItem, CarouselCaption} from 'react-bootstrap'
import '../assets/New-Tesla-Model-S-interior-hero.jpg'

import React from 'react'


const ModelS_Item2= ({title,desc,descLink,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,first}) => {
  return (
    <div className='item' style={{
      backgroundImage: `url(${backgroundImg})`
    }}>
      <div className= 'item_container'>
        <div className='item_text'>
          <h2>{title}</h2>
          <div className='item_textDesc'>
          <p>{desc}</p>
        </div>
      </div>

      <div className='item_lowerThird'>
        <div className='item_buttonsMS'>







       </div>


      </div>
    </div>
  </div>



  )
}











export default ModelS_Item2
