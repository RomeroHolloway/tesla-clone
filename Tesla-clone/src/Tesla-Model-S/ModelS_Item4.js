import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import "C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/Models.css"



//<!--Side By Side1-->

const SidebySide1 = () => {
  return (
    <div className='SidebySide'>






    <Container>
      <Row>
        <Col><img
          className="d-block w-100"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2a7b8898-d56d-47d9-9f0c-916cc2e4a279/bvlatuR/std/840x472/MS-Interior-Grid-A-Mobile"
          alt="First slide"/>
          </Col>
        <Col><b>Game From Anywhere</b>
      <br/>
      <br/>
      <br/>


        <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.</p>
        </Col>
      </Row>
      </Container>




      <Container>
        <Row>
          <Col><b>Stay Connected </b>
          <br/>
          <br/>
          <br/>

          <p>Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.</p>
            </Col>
          <Col><img
            className="d-block w-100"
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/114a2add-c969-4bca-b9da-84d36584f62c/bvlatuR/std/840x472/MS-Interior-Grid-B-Mobile"
            alt="First slide"/>


          </Col>
        </Row>
        </Container>

        <Container>
          <Row>
            <Col><img
              className="d-block w-100"
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c49862d9-6501-4d04-8d39-1929fa019bc5/bvlatuR/std/840x472/MS-Interior-Grid-C-Mobile"
              alt="First slide"/>
              </Col>
            <Col><b>Your Best Audio System</b>
          <br/>
          <br/>
          <br/>


            <p>A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road.</p>
            </Col>
          </Row>
          </Container>



          <Container>
            <Row>
              <Col><b>Real Storage </b>
              <br/>
              <br/>
              <br/>

              <p>With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.</p>
                </Col>
              <Col><img
                className="d-block w-100"
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/bc361d94-167c-49cb-8e0a-5724ce9ed607/bvlatuR/std/840x472/MS-Interior-Grid-D-Mobile"
                alt="First slide"/>


              </Col>
            </Row>
            </Container>


    </div>
  )
}

export default SidebySide1
