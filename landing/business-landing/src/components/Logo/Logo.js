import React from 'react';

import "./logo.css"

const Logo = (props) => {
    return (
        <div className="logo">
            <img className="logo__img" src={props.img} alt={props.title} width={props.width} height={props.height}/>
            <p className="logo__text">{props.text}</p>
        </div>
    );
};

export default Logo;