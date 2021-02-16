import React from 'react';
import picture from "./appStore.svg"
import s from './AppStore.module.css';

const AppStore = () =>{
    return (
        <a href = "#" className = {s.AppStoreLink}>
            <img src = {picture} className = {s.AppStorePicture} alt = "download from google play"/>
        </a>   
    )
}

export default AppStore;