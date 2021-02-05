import React from 'react';

import "./logo.css"

const Logo = (props) => {
    return (
        <div className="logo">
            <div className="logo__img">
                <img src={props.img} alt={props.title} width={props.width} height={props.height}/>
            </div>
            <h1 className="logo__text">{props.text}</h1>
        </div>
    );
};

export default Logo;