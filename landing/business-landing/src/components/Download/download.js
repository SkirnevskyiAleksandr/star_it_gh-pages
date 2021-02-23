import React from 'react';
import downloadModule from './download.module.css';

const Download = () => {
    return (
        <div className = {downloadModule.download}>
          <h4 className = {downloadModule.buttonDownload__title2}> Начни менять жизнь к лучшему</h4>
          <button className = {downloadModule.download__button} >Скачай приложение</button>
        </div>
    );
};
export default Download;