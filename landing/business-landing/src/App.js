import React from 'react';
import s from './App.module.css';
import Download from './components/Download/download';
import HowItCosts from './components/HowItCosts/HowItCosts';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className = {s.page}>
      <section className ={s.wrapper}>
        <Header/>
        <Hero/>
        <HowItCosts/>
        <Footer/>
      </section>  
    </div>
    
  );
}

export default App;
