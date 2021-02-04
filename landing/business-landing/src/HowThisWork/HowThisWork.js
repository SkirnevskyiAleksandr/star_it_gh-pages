import React from 'react';
import './HowThisWork.css';
import star_logo from '../images/star_logo.svg';
import upg_logo from "../images/upg_logo.svg";
import smile_logo from "../images/smile_logo.svg";

const HowThisWork = () => {
  return (
    <div className="containerHowThisWork">
        <h2 className="howThisWorkTitle">
            Как это работает
        </h2>
        <div className="howThisWorkTop">
            <div className="howThisWorkItems">
                <img src={star_logo} className="howThisWorkImg" alt="Icon" />
                <div className="howThisWorkContent">
                    <p className="howThisWorkText">
                    Клиент оценивает сервис
                    </p>
                </div>
            </div>
            <div className="howThisWorkItems">
                <img src={upg_logo} className="howThisWorkImg" alt="Icon" />
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
                <img src={star_logo} className="howThisWorkImg" alt="Icon" />
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
    </div>
  );
}

export default HowThisWork;