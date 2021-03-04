import React from 'react';

import imgLogo from "./img/logo.svg";

import logo from "./Logo.module.css"

const Logo = () => {
    const logotype = {
        text: "StarIt",
        title: "logotype",
    };

    return (
        <div className={logo.container}>
            <img className={logo.img} src={imgLogo} alt={logotype.title}/>
            <p className={logo.text}>{logotype.text}</p>
        </div>
    );
};

export default Logo;