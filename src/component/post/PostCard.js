import React from 'react';
import styles from './PostCard.module.css'
import {useHistory} from "react-router";

const PostCard = ({id, body, title, userId}) => {
    const history = useHistory();

    const handleClickCard = () => {
        history.push(`/post/${id}`)
    }

    return (
        <div className={styles.card} onClick={handleClickCard}>
            <h4>{title}</h4>
            <div className={styles.content}>
                <p>{body}</p>
            </div>
        </div>
    );
}
export default PostCard
