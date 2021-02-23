import React from 'react';
import appModule from './App.module.css';
import Download from './components/Download/download';
import HowItCosts from './components/HowItCosts/HowItCosts';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className = {appModule.page}>
      <section className ={appModule.wrapper}>
        <Download/>
        <HowItCosts/>
        <Footer/>
      </section>  
    </div>
     
  );
}

export default App;
