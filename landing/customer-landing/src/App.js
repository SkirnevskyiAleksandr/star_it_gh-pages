import React from 'react';
import './App.css';
import Download from './components/Download/download';
import HowItWorks from './components/HowItWorks/HowItWorks'


function App() {
  return (
    <div className = " page">
      <section className = "wrapper">
        <Download/>
        <HowItWorks/>
      </section>  
    </div>
    
  );
}

export default App;
