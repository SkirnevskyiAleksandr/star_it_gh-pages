import React from "react";


const ItemHowThisWork = ({items}) => {
    return (
    <div className="howThisWorkItems">
        <img src={items.url} className="howThisWorkImg" alt="Icon" />
        <div className="howThisWorkContent">
            <p className="howThisWorkText">
                {items.title}
            </p>
        </div>
    </div>
    );
}

export default ItemHowThisWork;