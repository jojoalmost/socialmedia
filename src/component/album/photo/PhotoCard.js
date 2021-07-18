import React from 'react';
import styles from './PhotoCard.module.css'

const PhotoCard = ({id, albumId, title, url, thumbnailUrl}) => {
    return (
        <div className={styles.container}>
            <h5 className={styles.title}>{title}</h5>
            <a href={url}>
                <img src={thumbnailUrl} alt=""/>
            </a>
        </div>
    )
}
export default PhotoCard;
