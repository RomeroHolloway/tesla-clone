import React from 'react'

import {Container,Row,Col} from 'react-bootstrap'
import "C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/Models.css"
import Button from 'C:/React Projects/tesla-clone/Tesla-clone/src/componets/Button.js'

const Ludicrous = ({title,desc,descLink,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,textleft,textleftdesc,textcenter,textcenterdesc,textright,textrightdesc}) => {
  return (
    <div>
    <div className="Ludicrous">

    <Container>
      <Row>
        <Col><p>Plaid</p> <h1>Beyond Ludicrous</h1>
        <Button className="Button_right" imp="primary" text={<strong>Order Now</strong>} link={leftBtnTxt}/>

        </Col>





        <Col xl={5}>With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. Both Long Range and Plaid powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs.</Col>



    </Row>
    </Container>
    </div>






    </div>




  )
}

export default Ludicrous
