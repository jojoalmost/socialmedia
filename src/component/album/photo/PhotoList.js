import React from 'react';

const PhotoList = ({id, albumId, title, url, thumbnailUrl}) => {
    return (
        <div>
            <h3>{title}</h3>
            <a href={url} target="_blank">
                <img src={thumbnailUrl} alt=""/>
            </a>
        </div>
    )
}
export default PhotoList;
