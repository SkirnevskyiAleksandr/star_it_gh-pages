import React from 'react';
import appModule from './App.module.css';
import HowItCosts from './components/HowItCosts/HowItCosts';
import Footer from './components/Footer/footer';

import Header from "./components/Header/";
import Hero from "./components/Hero/";

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <div className = {appModule.page}>
          <section className ={appModule.wrapper}>
            <HowItCosts/>
            <Footer/>
          </section>
        </div>
    </div>
  );
}

export default App;
