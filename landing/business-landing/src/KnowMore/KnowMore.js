import React from 'react';
import './KnowMore.css';

const KnowMore = () => {
  return (
    <div className="containerKnowMore">
        <p className="konwMoreContent">
            Хотите узнать больше? 
        </p>
        <div className="knowMoreLink">
            <a href="#" className="knowMoreHelp">
                Получите консультацию
            </a>
        </div>
    </div>
  );
}

export default KnowMore;