import React  from 'react'
import Header from 'C:/React Projects/tesla-clone/Tesla-clone/src/componets/Header.js';
import ModelS_Item from 'C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/ModelS_Item.js';

import ModelS from '../assets/Desktop-ModelS2.jpeg'

function Model3() {
  return (


    <div className="App">
<Header />
  <div className='app_itemsContainer'>
  <Item
    title="ModelS"
    desc="$69,420"
    descLink=""
    backgroundImg={ModelS}
    leftBtnTxt='Order Now'
    leftBtnLink=<button className="onclick" onclick = "https://www.tesla.com/" > Order Now
    </button>
    rightBtnTxt='Learn More'
    rightBtnLink='Learn More'
    twoButtons='true'
    first
    />

    <Item
      title="Model3"
      desc="Money Back Garuntee"
      descLink=""
      backgroundImg={Model3}
      leftBtnTxt='Order Now'
      leftBtnLink='Order Now'
      rigthBtnTxt='Learn Now'
      rightBtnLink='Learn More'
      twoButtons='true'
      />

      <Item
        title="Model X"
        desc="Money Back Garuntee"
        descLink=""
        backgroundImg={ModelX}
        leftBtnTxt='Order Now'
        leftBtnLink='Order Now'
        rightBtnTxt='Learn More'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item
          title="ModelY"
          desc="Money Back Garuntee"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt='Order Now'
          leftBtnLink='Order Now'
          rightBtnTxt='Learn More'
          rightBtnLink='Learn More'
          twoButtons='true'
          />

          <Item
            title="SolarRoof"
            desc="Money Back Garuntee"
            descLink="f"
            backgroundImg={SolarRoof}
            leftBtnTxt=''
            leftBtnLink='Order Now'
            rightBtnTxt='Learn More'
            rightBtnLink='Learn More'
            twoButtons='true'
            />

            <Item
              title="Lowest Cost Solar Panels in America"
              desc="Money Back Garuntee"
              descLink="f"
              backgroundImg={SolarPanels}
              leftBtnTxt='Order Now'
              leftBtnLink='Order Now'
              rightBtnTxt='Learn More'
              rightBtnLink='Learn More'
              twoButtons='true'
              />

              <Item
                title="Accessories"
                desc="Money Back Garuntee"
                descLink="f"
                backgroundImg={Accessories}
                leftBtnTxt='Order Now'
                leftBtnLink='Order Now'
                rightBtnTxt='Learn More'
                rightBtnLink='Learn More'
                twoButtons='true'
                />






    </div>
    </div>








  );
}



export default Model3
