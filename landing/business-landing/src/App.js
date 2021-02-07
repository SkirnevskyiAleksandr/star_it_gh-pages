import React from 'react';
import './App.css';
import HowThisWork from './HowThisWork/HowThisWork';
import KnowMore from './KnowMore/KnowMore';


function App() {

  const howWork = [
    {
      title: "Клиент оценивает сервис",
      urlImg: require("./images/eval_logo.svg") 
    },
    {
      title: "Вы узнаете, что клиенту нравится, и где есть недоработки",
      urlImg: require("./images/like_logo.svg")
    },
    {
      title: "Вы корректируете улучшаете сервис",
      urlImg: require("./images/upg_logo.svg")
    },
    {
      title: "$$$",
      urlImg: require("./images/shop_logo.svg")
    },
    {
      title: "Количество довольных клиентов растет",
      urlImg: require("./images/smile_logo.svg")
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
