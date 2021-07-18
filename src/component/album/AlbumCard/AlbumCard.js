import React from 'react';
import styles from './AlbumCard.module.css'
import {useHistory} from "react-router";

const AlbumCard = ({id, title}) => {
    const history = useHistory();

    const handleClickCard = () => {
        history.push(`/album/${id}`)
    }

    return (
        <div className={styles.card} onClick={handleClickCard}>
            <h5>{title}</h5>
        </div>
    )
}
export default AlbumCard
