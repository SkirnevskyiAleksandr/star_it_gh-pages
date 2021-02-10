import React from 'react';
import "./HowItworks.css";
import HowItWorksItem1 from './HowItWorksItems/HowItWorkstem1'
import HowItWorksItem2 from './HowItWorksItems/HowItWorkstem2'
import HowItWorksItem3 from './HowItWorksItems/HowItWorkstem3'
const HowItWorks = () => {
    return (
    <div>
        <div class="how-it-works__header">Как это работает</div>
      <div class="how-it-works">
        <HowItWorksItem1/>
        <HowItWorksItem2/>
        <HowItWorksItem3/>
      </div>
    </div>  
    );
};

export default HowItWorks;