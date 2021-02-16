import React from 'react';
import s from './download.module.css';

const Download = () => {
    return (
        <div className = {s.download}>
          <h4 className = {s.buttonDownload__title2}> Начни менять жизнь к лучшему</h4>
          <button className = {s.download__button} >Скачай приложение</button>
        </div>
    );
};
export default Download;