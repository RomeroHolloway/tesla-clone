import React from 'react';
import Home from 'C:/React Projects/tesla-clone/Tesla-clone/src/componets/Home.js';
import {Route, Link} from 'react-router-dom';
import ModelSCustom from 'C:/React Projects/tesla-clone/Tesla-clone/src/Tesla-Model-S/ModelSCustom.js';




function App() {
  return (


    <div className="App">
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/ModelSCustom' component={ModelSCustom}/>





      </div>
















  );
}

export default App;
