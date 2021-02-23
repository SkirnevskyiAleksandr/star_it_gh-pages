import React from 'react';
import instagramModule from './instagram.module.css';
import picture from './instagram.svg';

const Instagram = () => {
    return (
        <a href="#" className={instagramModule.socialLink}><img src={picture} /></a>
    );
};


export default Instagram;