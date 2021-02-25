import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


const Slider = () => {
  return (
    <div className='Slider'>

         <Carousel>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src="https://tesla-cdn.thron.com/delivery/public/image/tesla/93f0435e-b783-4614-812c-9bb4b31a3023/bvlatuR/std/840x560/MS-Interior-Carousel-C-Mobile"
               alt="First slide"
             />
             <Carousel.Caption>
               <h3>Perfect Enviorment </h3>
               <p>Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src="https://tesla-cdn.thron.com/delivery/public/image/tesla/4004169e-394f-411a-a5e6-4c5a1fb60095/bvlatuR/std/840x560/MS-Interior-Carousel-B-Mobile"
               alt="Third slide"
             />

             <Carousel.Caption>
               <h3>Focus Driving</h3>
               <p>The ultimate focus on driving: no stalks, no shifting. Model S is the best car to drive, and the best car to be driven in.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src="https://tesla-cdn.thron.com/delivery/public/image/tesla/10b6341b-c5b4-4d63-9b85-927ea5174cc7/bvlatuR/std/840x560/MS-Interior-Carousel-A-Mobile"
               alt="Third slide"
             />

             <Carousel.Caption>
               <h3>17” Cinematic Display</h3>
               <p>With 2200x1300 resolution, ultra bright, true colors, exceptional responsiveness and left-right tilt, the new center display is the best screen to watch anywhere.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src="https://tesla-cdn.thron.com/delivery/public/image/tesla/91bae53b-7af2-4837-8163-5dbf615bdc00/bvlatuR/std/840x560/MS-Interior-Carousel-D-Mobile"
               alt="First slide"
             />
             <Carousel.Caption>
               <h3>Redesigned Second Row</h3>
               <p>Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.</p>
             </Carousel.Caption>
           </Carousel.Item>
         </Carousel>

  </div>
  )
}

export default Slider
