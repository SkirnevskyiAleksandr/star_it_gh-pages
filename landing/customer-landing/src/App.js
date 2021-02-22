import React from 'react';
import s from './App.module.css';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Footer from './components/Footer/footer';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";


function App() {
  return (
    <div className = {s.page}>
      <section className ={s.wrapper}>
        <Header/>
        <Hero/>
        <HowItWorks/>
        <Footer/>
      </section>  
    </div>
    
  );
}

export default App;
