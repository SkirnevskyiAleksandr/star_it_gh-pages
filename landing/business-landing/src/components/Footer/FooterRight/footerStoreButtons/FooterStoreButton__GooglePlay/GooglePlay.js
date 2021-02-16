import React from 'react';
import picture from "./googlePlay.svg"
import s from './GooglePlay.module.css';

const GooglePlay = () =>{
    return (
        <a href = "#" className = {s.GooglePlayLink}>
            <img src = {picture} className = {s.GooglePlayPicture} alt = "download from google play"/>
        </a>   
    )
}

export default GooglePlay;