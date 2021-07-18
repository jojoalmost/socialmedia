import React from 'react';
import styles from './PhotoCard.module.css'

const PhotoCard = ({id, title, thumbnailUrl, onShowPhoto}) => {
    return (
        <div className={styles.container} onClick={() => onShowPhoto(id)}>
            <h5 className={styles.title}>{title}</h5>
            <img src={thumbnailUrl} alt=""/>
        </div>
    )
}
export default PhotoCard;
