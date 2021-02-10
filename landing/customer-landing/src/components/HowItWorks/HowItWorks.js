import React from 'react';
import  s from './HowItworks.module.css';
import HowItWorksItem1 from './HowItWorksItems/HowItWorkstem1'
import HowItWorksItem2 from './HowItWorksItems/HowItWorkstem2'
import HowItWorksItem3 from './HowItWorksItems/HowItWorkstem3'
const HowItWorks = () => {
    return (
    <div>
        <div className={s.howItWorks__header}>Как это работает</div>
      <div className={s.howItWorks}>
        <HowItWorksItem1/>
        <HowItWorksItem2/>
        <HowItWorksItem3/>
      </div>
    </div>  
    );
};

export default HowItWorks;