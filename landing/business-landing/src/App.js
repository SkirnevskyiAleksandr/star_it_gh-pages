import React from 'react';
import './App.css';
import HowThisWork from './HowThisWork/HowThisWork';
import KnowMore from './KnowMore/KnowMore';
import eval_logo from './images/eval_logo.svg';
import like_logo from './images/like_logo.svg';
import upg_logo from './images/upg_logo.svg';
import shop_logo from './images/shop_logo.svg';
import smile_logo from './images/smile_logo.svg';



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
    <div className="App">
      <KnowMore />
      <HowThisWork item={howWork} />
      <KnowMore />
    </div>
  );
}

export default App;
