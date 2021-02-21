import React from 'react';
import './App.css';
import DonloadApplication from './components/DonloadApplication/DonloadApplication';
import WhereItWork from './components/WhereItWork/WhereItWork';

function App() {
  return (
    <div>
      <DonloadApplication /> 
      <WhereItWork />
      <DonloadApplication />
    </div>
  );
}

export default App;
