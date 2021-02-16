import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HowItCosts from './components/HowItCosts/HowItCosts';
import Footer from './components/Footer/footer';
import './App.css';
import HowThisWork from './components/HowThisWork/HowThisWork';
import KnowMore from './components/KnowMore/KnowMore';
import eval_logo from './components/images/eval_logo.svg';
import like_logo from './components/images/like_logo.svg';
import upg_logo from './components/images/upg_logo.svg';
import shop_logo from './components/images/shop_logo.svg';
import smile_logo from './components/images/smile_logo.svg';



function App() {

  const howWork = [
    {
      title: "Клиент оценивает сервис",
      logo: eval_logo 
    },
    {
      title: "Вы узнаете, что клиенту нравится, и где есть недоработки",
      logo: like_logo
    },
    {
      title: "Вы корректируете улучшаете сервис",
      logo: upg_logo
    },
    {
      title: "$$$",
      logo: shop_logo
    },
    {
      title: "Количество довольных клиентов растет",
      logo: smile_logo
    }
  ]

  return (
    <div className = {s.page}>
      <section className ={s.wrapper}>
        <Header/>
        <Hero/>
        <KnowMore />
        <HowThisWork item={howWork} />
        <KnowMore />
        <HowItCosts/>
        <Footer/>
      </section>  
    </div>
    
  );
}

export default App;
