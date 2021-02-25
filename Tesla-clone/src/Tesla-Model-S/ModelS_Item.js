import Button from 'C:/React Projects/tesla-clone/Tesla-clone/src/componets/Button.js'
import Carousel from 'react-bootstrap/Carousel'

const ModelS_Item= ({title,desc,descLink,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,first}) => {
  return (
    <div className='item' style={{
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
        <div className='item_buttonsMS'>
        <Button className="Button_right" imp="primary" text={leftBtnLink} link={leftBtnLink}/>






       </div>


      </div>
    </div>
  </div>



  )
}






export default ModelS_Item
