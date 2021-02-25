import React from 'react';
import downloadModule from './download.module.css';

const Download = () => {
    return (
        <div className = {downloadModule.download}>
          <h4 className = {downloadModule.buttonDownload__title2}> Start changing your life for the better</h4>
          <button className = {downloadModule.download__button} >Download app</button>
        </div>
    );
};
export default Download;