import React from 'react';
import styles from './AlbumCard.module.css'

const AlbumCard = ({userId, id, title}) => {
    return (
        <div className={styles.card}>
            <h5>{title}</h5>
        </div>
    )
}
export default AlbumCard
