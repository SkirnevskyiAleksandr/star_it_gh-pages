import React from 'react';
import './HowThisWork.css';
import ItemHowThisWork from './ItemHowThis Work';git 
import eval_logo from '../images/eval_logo.svg';
import upg_logo from "../images/upg_logo.svg";
import shop_logo from "../images/shop_logo.svg";
import like_logo from "../images/like_logo.svg";
import smile_logo from "../images/smile_logo.svg";



  return (
    <section className="containerHowThisWork">
        <h2 className="howThisWorkTitle">
            Как это работает
        </h2>
        <div className="howThisWorkTop">
           <div className="howThisWorkItems">
                <img src={eval_logo} className="howThisWorkImg" alt="Icon" />
                <div className="howThisWorkContent">
                    <p className="howThisWorkText">
                    Клиент оценивает сервис
                    </p>
                </div>
            </div>
            <div className="howThisWorkItems">
                <img src={like_logo} className="howThisWorkImg" alt="Icon" />
                <div className="howThisWorkContent">
                    <p className="howThisWorkText">
                    Вы узнаете, что клиенту нравится, и где есть недоработки
                    </p>
                </div>
            </div>
            <div className="howThisWorkItems">
                <img src={upg_logo} className="howThisWorkImg" alt="Icon" />
                <div className="howThisWorkContent">
                    <p className="howThisWorkText">
                       Вы корректируете улучшаете сервис
                    </p>
                </div>
            </div>
        </div>
        <div className="howThisWorkBottom">
        <div className="howThisWorkItems">
                <img src={shop_logo} className="howThisWorkImg" alt="Icon" />
                <div className="howThisWorkContent">
                    <p className="howThisWorkText">
                        $$$
                    </p>
                </div>
            </div>
            <div className="howThisWorkItems">
                <img src={smile_logo} className="howThisWorkImg" alt="Icon" />
                <div className="howThisWorkContent">
                    <p className="howThisWorkText">
                       Количество довольных клиентов растет
                    </p>
                </div>
            </div>
        </div> 
    </section>
  );
}

export default HowThisWork;