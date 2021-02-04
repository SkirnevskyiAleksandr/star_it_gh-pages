import React from 'react';
import './App.css';
import HowThisWork from './HowThisWork/HowThisWork';
import KnowMore from './KnowMore/KnowMore';


function App() {
  return (
    <div className="App">
      <KnowMore />
      <HowThisWork />
      <KnowMore />
    </div>
  );
}

export default App;
