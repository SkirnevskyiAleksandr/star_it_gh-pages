import React from 'react';
import picture from "./appStore.svg"
import appStoreModule from './AppStore.module.css';

const AppStore = () =>{
    return (
        <a href = "#" className = {appStoreModule.AppStoreLink}>
            <img src = {picture} className = {appStoreModule.AppStorePicture} alt = "download from google play"/>
        </a>   
    )
}

export default AppStore;