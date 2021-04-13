import React from 'react';
import './App.css';
import logo from './asets/logo_silpo.png';
import Clock from './asets/Clock/clock';
import Rating from './asets/Rating/rating';
import  './asets/Rating/rating.css';

function App() {
  return (
    <div className="App">
      {/* header */}
      <section className="header">

      </section>
      <nav className="nav">
        <a href="#" className="nav__items">statistics</a>
        <a href="#" className="nav__items">info</a>
        <a href="#" className="nav__items">profile</a>
      </nav>
      <section className="data">
        <div className="data_wrapper">
          <div className="">
            <div className="data__item">
              <span className="data__item_name">Name: </span>
              <span className="item_info">Silpo Ltd</span>
            </div>

            <div className="data__item address">
              <span className="data__item_address">Address: </span>
              <span className="item_info">Kiev, Str. Bulgakov, 11</span>
            </div>
            <div className="data__item ticket">
              <span>Ticket window:</span>
              <span className="item_info"> №8</span>
            </div>
          </div>
          <div className="logo__wrapper">
            <img src={logo} className="logo" alt="img" />
          </div>
        </div>

        <div className="time-wrapper">
        <div className="data__item time">
          <div className="icon-clock">
            <span className="clock-letter">L</span>
          </div>
          <span className="time-text"> Time</span>
        </div>
        
          <Clock />
        
        </div>
        <hr className="line"/>

      </section>
      <section className="rating-section">
        <Rating/>
        <hr className="line"/>
      </section>
      <section className="feedback">
        <form className="feedback__form">
          <div className="checkbox__wrapper">
          <label className="checkbox__label">
            <span className="checkbox__text"> I want to get answer</span>
          <input type="checkbox" className="checkbox"/>
          </label>
          </div>
          <input className="input__feedback" type="textarea" placeholder="feedback"/>
          <button className="button" type="submit">
            Send
          </button>
        </form>
      </section>

    </div>
  );
}

export default App;
