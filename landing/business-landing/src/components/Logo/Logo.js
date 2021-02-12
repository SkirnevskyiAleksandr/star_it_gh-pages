import React from 'react';

import logo from "./Logo.module.css"

const Logo = (props) => {
    return (
        <div className={logo.container}>
            <img className={logo.img} src={props.img} alt={props.title} width={props.width} height={props.height}/>
            <p className={logo.text}>{props.text}</p>
        </div>
    );
};

export default Logo;