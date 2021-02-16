import React from 'react';
import  s from './HowItCosts.module.css';
import HowItCostsItem1 from './HowItCostsItems/HowItCostsItem1'
import HowItCostsItem2 from './HowItCostsItems/HowItCostsItem2'
import HowItCostsItem3 from './HowItCostsItems/HowItCostsItem3'
const HowItCosts = () => {
    return (
    <div>
        <div className={s.HowItCosts__header}>Сколько это стоит</div>
      <div className={s.HowItCosts}>
        <HowItCostsItem1/>
        <HowItCostsItem2/>
        <HowItCostsItem3/>
      </div>
    </div>  
    );
};

export default HowItCosts;