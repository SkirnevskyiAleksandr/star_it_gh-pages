import React from 'react';
import s from './instagram.module.css';
import picture from './instagram.svg';

const Instagram = () => {
    return (
        <a href="#" className={s.socialLink}><img src={picture} /></a>
    );
};


export default Instagram;