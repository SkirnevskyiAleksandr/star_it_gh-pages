import React from 'react';
import twitterModule from './twitter.module.css';
import picture from './twitter.svg';

const Twitter = () => {
    return (
        <a href="#" className={twitterModule.socialLink}><img src={picture} /></a>
    );
};


export default Twitter;