import React from 'react';

import google from "../Hero/img/google.svg";
import ios from "../Hero/img/ios.svg";

import "./download.css";

const Download = () => {
    return (
        <div className="download">
            <a href="#" className="download__link">
                <img src={google} alt="скачать с Google Play"/>
            </a>
            <a href="#" className="download__link">
                <img src={ios} alt="скачать с App Story"/>
            </a>
        </div>
    );
};

export default Download;