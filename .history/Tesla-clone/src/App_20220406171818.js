import React from 'react';
import Home from './componets/Home.js';
import {Route, Link} from 'react-router-dom';
import ModelSCustom from './Tesla-Model-S/ModelSCustom.js';




function App() {
  return (


    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/ModelSCustom' component={ModelSCustom}/>





      </div>
















  );
}

export default App;
