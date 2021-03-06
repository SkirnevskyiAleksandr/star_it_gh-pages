import React from 'react';

import './App.css';

import Header from "./components/Header/";
import Hero from "./components/Hero/";
import DonloadApplication from './components/DonloadApplication';
import WhereItWork from './components/WhereItWork';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <DonloadApplication />
      <WhereItWork />
      <DonloadApplication />
    </div>
  );
}

export default App;
