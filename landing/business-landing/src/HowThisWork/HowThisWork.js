import React from 'react';
import './HowThisWork.css';
import ItemHowThisWork from './ItemHowThis Work'; 


const HowThisWork = ({item}) => {

    const itemsCard = item.map((items,i) => <ItemHowThisWork 
    items={items}
    key={i} />);

  return (
    <section className="containerHowThisWork">
        <h2 className="howThisWorkTitle">
            Как это работает
        </h2>
        <div className="howThisWorkCard">

            {itemsCard}

        </div>
 
    </section>
  );
}

export default HowThisWork;