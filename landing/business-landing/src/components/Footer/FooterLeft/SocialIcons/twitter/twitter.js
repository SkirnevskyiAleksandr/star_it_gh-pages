import React from 'react';
import s from './twitter.module.css';
import picture from './twitter.svg';

const Twitter = () => {
    return (
        <a href="#" className={s.socialLink}><img src={picture} /></a>
    );
};


export default Twitter;