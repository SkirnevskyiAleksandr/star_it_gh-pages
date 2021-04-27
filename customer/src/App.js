import React from 'react';
import './App.css';
import logo from './asets/logo_silpo.png';
import Clock from './asets/Clock/clock';
import icon from './asets/clock-icon.svg';	
const zapros = function zapros() { 
	fetch("./server.json").then( response => response.json()).then(json=>console.log(json));
};
function App() {

  return (
    <div className="App">
      {/* header */}
      <section className="header">
     
      </section>
	
      <nav className="nav">
        <a onClick={zapros}  href="#" className="nav__items">kishenya</a>
        <a href="#" className="nav__items">atb</a>
        <a href="#" className="nav__items">silpo</a>
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
          
          <img className = "clock-picture"  src = {icon}></img>
          
          <span className="time-text"> Time</span>
        </div>
          <Clock />
        </div>
      </section>
      <hr className="line"/>
      
      <section className="feedback">
        <form className="feedback__form"
        method="POST"
          action=" localhost:8181/api/fbo/business_id"
          name="rating-form"
        >
          <div className="rating-wrapper">
            <div className="output">Rating</div>
            <div className="rating">
                <input type="radio" id="star_5" name="star" value="5"/>
                <label htmlFor="star_5"></label>
                <input type="radio" id="star_4" name="star" value="4"/>
                <label htmlFor="star_4"></label>
                <input type="radio" id="star_3" name="star" value="3"/>
                <label htmlFor="star_3"></label>
                <input type="radio" id="star_2" name="star" value="2"/>
                <label htmlFor="star_2"></label>
                <input type="radio" id="star_1" name="star" value="1"/>
                <label htmlFor="star_1"></label>
		    </div>
        <hr className="line"/>
        </div>



          <div className="checkbox__wrapper">
          <label className="checkbox__label">
            <span className="checkbox__text"> I want to get answer</span>
          <input type="checkbox" className="checkbox" name="checkbox"/>
          </label>
		 </div>
          <input className="input__feedback"
            required
            type="textarea"
            name="feedback"
            minLength="2"
            maxLength="25"
            placeholder="feedback"/>
          <button className="button" type="submit">
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
