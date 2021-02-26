import React from 'react';
import appModule from './App.module.css';
import HowItCosts from './components/HowItCosts/HowItCosts';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className = {appModule.page}>
      <section className ={appModule.wrapper}>
        <HowItCosts/>
        <Footer/>
      </section>  
    </div>
     
  );
}

export default App;
