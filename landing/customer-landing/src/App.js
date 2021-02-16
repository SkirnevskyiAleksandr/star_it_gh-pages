import React from 'react';
import s from './App.module.css';
import Download from './components/Download/download';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className = {s.page}>
      <section className ={s.wrapper}>
        <Download/>
        <HowItWorks/>
        <Footer/>
      </section>  
    </div>
    
  );
}

export default App;
