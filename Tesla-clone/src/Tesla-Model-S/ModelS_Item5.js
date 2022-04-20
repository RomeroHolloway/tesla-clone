import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import "./Models.css"
import Button from '../componets/Button.js'

const Range = ({title,desc,descLink,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,textleft,textleftdesc,textcenter,textcenterdesc,textright,textrightdesc}) => {
  return (
    <div className='Range' style={{
      backgroundImage: `url(${backgroundImg})`
    }}>
      <div className= 'item_container'>
        <div className='item_text'>
          <p>{title}</p>
          <div className='item_textDesc'>
          <p>{desc}</p>
        </div>
      </div>

      <div className='item_lowerThird'>
    <Container fluid>
    <Row>
    <div className="textleft">
    <Col md={4}>
    <h3>{textleft}</h3>
    <p>{textleftdesc}</p>
    </Col>
    </div>

    <div className="textcenter">
    <Col md={4}>
    <h3>{textcenter}</h3>
    <p>{textcenterdesc}</p>
    </Col>
    </div>

<div className="textright">
    <Col md={4}>
    <h3>{textright}</h3>
    <p>{textrightdesc}</p>

    </Col>
    </div>
  </Row>
</Container>
</div>





      </div>
    </div>




  )
}





export default Range
