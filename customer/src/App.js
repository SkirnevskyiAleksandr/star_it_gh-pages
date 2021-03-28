import React from 'react';
import './App.css';
import logo from './asets/logo_silpo.png'

function App() {
  return (
    <div className="App">
    <section className = "data">
      <div className = "data_wrapper">
    <div className = ""> 
      <div className = "data__item">
          <span className = "data__item_name">Name: </span>
          <span className = "item_info">Silpo Ltd</span>
      </div>

      <div className = "data__item address">
        <span className = "data__item_address">Address: </span>
        <span className = "item_info">Kiev, Str. Bulgakov, 11</span>
      </div>
    </div>
    <div className = "logo__wrapper"><img src = {logo} className = "logo" alt="img"/></div>
    </div>
    
      <div className = "data__item ticket">tiket</div>
      <div className = "data__item time">time</div>
    </section>
    <section className = "rating">
    </section> 
    <section className = "feedbeak">
    </section>

    </div>  
  );
}

export default App;
