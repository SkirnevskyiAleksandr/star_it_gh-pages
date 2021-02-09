import React from 'react';
import './App.css';
import Download from './components/Download/download';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className = " page">
      <section className = "wrapper">
        <Download/>
        <HowItWorks/>
        <Footer/>
      </section>  
    </div>
    
  );
}

export default App;
