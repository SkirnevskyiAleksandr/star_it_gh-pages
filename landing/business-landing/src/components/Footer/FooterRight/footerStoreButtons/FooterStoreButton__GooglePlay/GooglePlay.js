import React from 'react';
import picture from "./googlePlay.svg"
import googlePlayModule from './GooglePlay.module.css';

const GooglePlay = () =>{
    return (
        <a href = "#" className = {googlePlayModule.GooglePlayLink}>
            <img src = {picture} className = {googlePlayModule.GooglePlayPicture} alt = "download from google play"/>
        </a>   
    )
}

export default GooglePlay;