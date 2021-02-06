import React from 'react';

const DownloadItem = (props) => {
    return (
        <a href={props.link} className="download__link">
            <img src={props.imgUrl} alt={props.title}/>
        </a>
    );
};

export default DownloadItem;