import React from 'react';
import s from './facebook.module.css';
import picture from './facebook.svg';

const Facebook = () => {
    return (

        <a href="https://www.facebook.com/Star-It-148078898545796" className={s.socialLink}><img src={picture} /></a>

    );
};


export default Facebook;