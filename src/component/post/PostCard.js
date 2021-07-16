import React from 'react';
import styles from './PostCard.module.css'

const PostCard = ({id, body, title, userId}) => {
    return (
        <div className={styles.card}>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
}
export default PostCard
