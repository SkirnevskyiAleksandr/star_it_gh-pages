import React from 'react';
import facebookModule from './facebook.module.css';
import picture from './facebook.svg';

const Facebook = () => {
    return (

        <a href="https://www.facebook.com/Star-It-148078898545796" className={facebookModule.socialLink}><img src={picture} /></a>

    );
};


export default Facebook;